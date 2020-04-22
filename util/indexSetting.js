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
        },
        filter_shingle: {
          type: 'shingle',
          max_shingle_size: 3,
          min_shingle_size: 2,
          output_unigrams: true
        }
      },
      analyzer: {
        cjk_url_email: {
          tokenizer: 'icu_tokenizer',
          filter: ['lowercase', 'synonym', 'filter_shingle', 'cjk_width', 'cjk_bigram', 'english_stop', 'stop', 'kstem'],
        }
      },
    },
  },
};