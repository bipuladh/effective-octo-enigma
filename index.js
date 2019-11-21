const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;
const bucketName = process.env.BUCKET_NAME;

//configure aws
aws.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey
});

var s3 = new aws.S3();

var params = {
    Bucket: bucketName,
    Body: fs.createReadStream(filePath),
    Key: "./dummy-data/file.txt"
};

s3.upload(params, (err, data)=> {
    if (err){
        console.warn(err);
    }
    if (data){
        console.log("Access sucessful");
    }
});
