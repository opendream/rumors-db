export default {
  number_of_shards: 1,
  index: {
    analysis: {
      filter: {
        english_stop: {
          type: 'stop',
          stopwords: '_english_',
        },
      },
      analyzer: {
        cjk_url_email: {
          tokenizer: 'thai',
          filter: ['cjk_width', 'lowercase', 'cjk_bigram', 'english_stop', "stop", "kstem"],
        },
      },
    },
  },
};