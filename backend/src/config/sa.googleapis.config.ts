import {google, Auth} from 'googleapis';
import privateKey from '../../icrl-image-analysis-backend-service-account-private-key.json'

export default async function authorize() {
    const jwtClient = new google.auth.JWT(
        privateKey.client_email,
        '',
        privateKey.private_key,
        ['https://www.googleapis.com/auth/drive']);
    //authenticate request
    jwtClient.authorize((err, tokens) => {
    if (err) {
    console.log(err);
    } else {
    console.log('Successfully connected!');
    }
    });
    return jwtClient;
  }

/**
 * Lists the names and IDs of up to 10 files.
 * @param {OAuth2Client} authClient An authorized OAuth2 client.
 */
export async function listFiles(authClient : Auth.OAuth2Client) {
    const drive = google.drive({version: 'v3', auth: authClient});
    try {
      const res = await drive.files.list({
        corpora: 'drive',
        driveId: '0AGWFVhDV3Dm5Uk9PVA',
        includeItemsFromAllDrives: true,
        supportsAllDrives: true,
        q: "mimeType='application/vnd.google-apps.folder'",
      });
      console.log('Files in the shared drive:', res.data.files);
    } catch (err) {
      console.error('Error listing files:', err);
    }
  }