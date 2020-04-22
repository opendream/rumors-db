export default {
  number_of_shards: 1,
  index: {
    analysis: {
      filter: {
        english_stop: {
          type: 'stop',
          stopwords: '_english_',
        },
        synonym : {
          type : 'synonym',
          synonyms_path : 'synonyms.txt'
        }
      },
      analyzer: {
        cjk_url_email: {
          tokenizer: 'thai',
          filter: ['lowercase', 'synonym', 'cjk_width', 'cjk_bigram', 'english_stop', 'stop', 'kstem'],
        },
      },
    },
  },
};