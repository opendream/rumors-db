export default {
  properties: {
    email: { type: 'keyword' },
    password: { type: 'keyword' },
    name: { type: 'keyword' },
    avatarUrl: { type: 'keyword' },

    facebookId: { type: 'keyword' },
    githubId: { type: 'keyword' },
    twitterId: { type: 'keyword' },

    belongTo: {type: 'keyword'},
    isStaff: {type: 'boolean'},

    createdAt: { type: 'date' },
    updatedAt: { type: 'date' },
  },
};
