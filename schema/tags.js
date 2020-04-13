export default {
  properties: {
    title: { type: 'keyword' },
    description: { type: 'text', analyzer: 'cjk' },
    priority: {type: 'integer'},

    // auth
    userId: { type: 'keyword' },
    appId: { type: 'keyword' },

    createdAt: { type: 'date' },
    updatedAt: { type: 'date' },
  },
};
