const file   = require('../models/FileModel');
const { v4: uuidv4 } = require('uuid');
const sendMail = require('../config/mailer');
const mailTemplate = require('../config/mailer');
var ejs = require('ejs');

const fs = require('fs');

var path = require('path');

exports.index = (req, res, next) => {
    res.render('pages/index', {
        title: 'File Share'
    }); 
}

exports.UploadFiles = async (req, res, next) => {

    const upload_file = req.file;
    console.log(req.file);
    if(!upload_file){
        res.send({ status: false,messege:"File is empty"});
    }

    let files = new file({
        file_name: req.file.filename,
        uuid: uuidv4(),
        file_url:req.file.path,
        file_extension:req.file.mimetype,
        status:'',
        sender_email:'',
        reciever_email:'',
        message:'',
        path: req.file.path,
        file_size: req.file.size
    });

    const response = await files.save();

    try{
        
        res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}`,status:true});
    } catch(err){
        res.json({error:err});
    } 
    
}


exports.files = async (req, res, next) => {
    console.log(req.params);
    if(req.params){
        const response = await file.findOne({uuid:req.params.uuid});

        try {

            if(response){

                /*-----Check if file is greater than 12 hour old------------*/
                return res.render('pages/download', {
                    title: 'Download Your file Share',
                    fileName:response.file_name,
                    filesize:response.file_size,
                    downloadlink:`${process.env.APP_BASE_URL}/download/${response.uuid}`,
                    status:true,
                });
            } else {
                res.render('pages/download', {
                    title:'Download Your file Share',
                    res:"Sorry Link has been expired!",
                    status:false,
                });
            }

        } catch(err){

            res.render('pages/download', {
                title:'Download Your file Share',
                res:"Sorry Link has been expired!",
                status:false,
            });
        }

    } else {
        res.render('pages/download', {
            title:'Download Your file Share',
            res:"Sorry Link has been expired!",
            status:false,
        });
    }
}


exports.download = async (req, res, next) => {
   console.log(req.params);
   //res.json({msg:req.params});

   if(req.params){

        //----Check uuid from DB
        const file_data = await file.findOne({uuid:req.params.uuid});

        try{
            //console.log(file_data);
            /*----File Exists---*/
            if(file_data){

                //----------Download File
                let download_url = `${process.env.APP_BASE_URL}/${file_data.file_url}`;
                let markup = `<p><a download=${download_url} href=${download_url}>Download</a></p>\n`;
                 
                res.download(`${process.env.APP_BASE_URL}/uploads/2021-01-04T10-07-31.876Z-Desert.jpg`);


            } else {
                res.json({response:'',message:'Link has Expired..!'});
            }


        } catch(err){

            res.json({response:err});
        }

   }




    /* res.render('pages/download', {
        title: 'File Share'
    }); */
}

exports.mailsend =async (req, res, next) => {

    const { emailTo, emailFrom, expiresIn,message } = req.body;

    let uuid='1f3a23df-68db-4841-9fcf-8a0b0f903f22';

    if(!uuid || !emailTo || !emailFrom) {
        return res.status(200).send({success:false, message: 'All fields are required except Message.'});
    }

    const files = await file.findOne({uuid: uuid});

    try{

        if(!files){
            return res.status(200).send({ success:false,message: 'Link has Expired.'});
        }

        let Payload = {uuid,emailFrom}

        var template = require("../config/EmailTemplate")(Payload);

        //---Send mail to Reciver
        sendMail({
            from:emailFrom,
            to: emailTo, 
            subject: `${emailFrom} has share a file with your uisng Ishare.com ✔`, // Subject line
            //text: `${emailFrom} shared a file with you.✔`,
            html: template
        }).then(result=>{
            return res.status(200).json({success: true,message:'✔ Mail sent Successfully.'});
        }).catch(err=>{
            return res.status(500).json({message: "Something Went Wrong,Please Try Again.",success: false});
        })
    } catch(err){
        return res.status(500).send({ error: err});
    }
}

/**
 * Delete file after 12 hours
 */
exports.delete_cron = async(req, res, next)=>{

   var ONE_HOUR = 60 * 60 * 1000; /* ms */

   var time =  Date.now() + 2 * 60 * 60 * 1000
   console.log(time);
   
   var time= new Date(Date.now() - 12 * 60 * 60 * 1000);

   var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

   var currentdate = new Date();
   res.json({currentdate});
   //res.status(200).send(time);
}
