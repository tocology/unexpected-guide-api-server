import cfsign from 'aws-cloudfront-sign';
import moment from 'moment';
import path from 'path';

const cfPath = 'http://d3gr0p3062v2h3.cloudfront.net/';

const signingParams = {
  keypairId: 'APKAITG2XNVB7FJJ53ZA',
  // privateKeyString: process.env.PRIVATE_KEY,
  // Optional - this can be used as an alternative to privateKeyString
  privateKeyPath: path.resolve(__dirname, 'cloudfront/pk-APKAITG2XNVB7FJJ53ZA.pem'),
  expireTime: moment().utc().add(1, 'day')
}

function getSignedUrl(bucketKey) {
  return cfsign.getSignedUrl(cfPath + bucketKey, signingParams);
}

export default {
  getSignedUrl
}
