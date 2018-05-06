var app = new Vue({
  el: '#app',

  data: {
    newHashtag: '',
    chosenHashtags: [],
    availableHashtags: [
      '#astuaryart', '#madisonart', '#art',
      '#365daysofart', '#madisonartscene',
      '#springart', '#midwestart', '#liquidart',
      '#Astuary', '#ArtByMarissaRecker', '#marissarecker', '#instagramshill'
    ]
  },

  methods: {
    alphabetized: function(list) {
      return list;
    },

    addNewHashtag: function() {
      this.chosenHashtags.push(this.newHashtag);
      this.newHashtag = '';
    },

    addChosenHashtag: function(key) {
      var index = this.availableHashtags.indexOf(key);
      this.availableHashtags.splice(index, 1);
      this.chosenHashtags.push(key);
    },

    removeChosenHashtag: function(key) {
      var index = this.chosenHashtags.indexOf(key);
      this.chosenHashtags.splice(index, 1);
      this.availableHashtags.push(key);
    },

    stripHashtag: function(value) {
      if (value.charAt(0) == '#') return value.substring(1);
      return value;
    }
  },

  computed: {
    filteredAvailableHashtags: function() {
      var self = this;
      if (!this.newHashtag) return this.availableHashtags;
      return this.availableHashtags.filter(function(v) {
	var needle = self.stripHashtag(self.newHashtag),
	    hayStack = self.stripHashtag(v);

	return hayStack.indexOf(needle) !== -1;
      });
    }
  }
});
