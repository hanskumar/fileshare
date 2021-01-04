const file   = require('../models/FileModel');
const { v4: uuidv4 } = require('uuid');
const sendMail = require('../config/mailer');
const mailTemplate = require('../config/mailer');

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
        res.send({ status: false,messege:"File is empty"})
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
                
                //res.end(markup);

                /* let file = `${process.env.APP_BASE_URL}/${file_data.file_url}`;
                res.download(file);
                console.log(file); */


                
                //const files = `${__dirname}/public/uploads/2021-01-04T10-07-31.876Z-Desert.jpg`;

                //let absPath = path.join(__dirname, '/uploads/', '2021-01-04T11-43-37.699Z-Koala.jpg');
                //let relPath = path.join('./uploads', '2021-01-04T11-43-37.699Z-Koala.jpg'); // path relative to server root

                //console.log(absPath);    
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

    //res.send({msg:emailFrom});

    let uuid='1f3a23df-68db-4841-9fcf-8a0b0f903f22';

    console.log(req.body);

    if(!uuid || !emailTo || !emailFrom) {
        return res.status(422).send({ error: 'All fields are required except expiry.'});
    }

    const files = await file.findOne({uuid: uuid});

    try{

        if(!files){
            return res.status(422).send({ error: 'Link has Expired.'});
        }

        //---Send mail to Reciver
        sendMail({
            from:emailFrom,
            to: emailTo, // list of receivers
            subject: 'Ishare Email', // Subject line
            text: `${emailFrom} shared a file with you.`,
            html: 'Test mail from Ishare', // html body
        }).then(result=>{
            return res.json({success: true});
        }).catch(err=>{
            return res.status(500).json({error: err});
        })
    } catch(err){
        return res.status(500).send({ error: 'Something went wrong.'});
    }
}