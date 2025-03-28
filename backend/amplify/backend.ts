import { defineBackend } from '@aws-amplify/backend';
import { backupDB } from './dbBackup/resource';
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  backupDB
});
