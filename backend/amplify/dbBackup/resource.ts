import { defineFunction } from '@aws-amplify/backend';

export const backupDB = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'dbBackup',
  entry: './handler.ts',
  schedule: "every day"
});