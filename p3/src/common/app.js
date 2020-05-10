import Api from '@/common/api.js';

export const config = {
  firebase: {
    apiKey: 'AIzaSyD2iCzRp5JUEmVm1-TBqZourCzx77TlY9M',
    projectId: 'e28-recipes'
  }
}

export const api = new Api({
  apiKey: config.firebase.apiKey,
  projectId: config.firebase.projectId
});