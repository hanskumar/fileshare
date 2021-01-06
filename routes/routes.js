    const router = require("express").Router();
    const FileshareController = require('../controllers/FileshareController');

    router.get("/", FileshareController.index);

    /*---------Upload file on server API------------------*/    
    router.post("/api/UploadFiles", FileshareController.UploadFiles);

    /*---------Share Link------------------*/    
    router.get("/files/:uuid", FileshareController.files);

    /*-------Download link on mail or button-----------*/
    router.get("/download/:uuid", FileshareController.download);


    /*-------Download link on mail or button-----------*/
    router.post("/sendmail", FileshareController.mailsend);


    /*-------Cron Script to Delete File after 12 Hour-----------*/
    router.get("/delete_cron", FileshareController.delete_cron);


    router.post("/send", FileshareController.send);


    module.exports = router;