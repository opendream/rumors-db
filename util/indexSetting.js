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
          synonyms : [
            'covid, โควิด, โควิท, โคโรนา, โคโรน่า, corona',
          ]
        }
      },
      analyzer: {
        cjk_url_email: {
          tokenizer: 'thai',
          filter: ['cjk_width', 'lowercase', 'cjk_bigram', 'english_stop', 'stop', 'kstem', 'synonym'],
        },
      },
    },
  },
};