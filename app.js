function get() {
  return [
    '#365', '#365dayproject', '#365daychallenge', '#365challenge', '#dailychallenge', '#mixedmedia', '#mixedmediaart', '#alcoholink', '#alcoholinkart', '#alcoholinkartist', '#fluidart', '#fluidartwork', '#artflow', '#artflowsession', '#artflowsessions', '#originalart', '#artforsale', '#yupo', '#yupoart', '#madison', '#madisonart', '#madisonartist', '#wisconsin', '#astuaryart'
    ]
}

var app = new Vue({
  el: '#app',

  data: {
    newHashtag: '',
    chosenHashtags: [],
    availableHashtags: get()
  },

  methods: {
    alphabetized: function(list) {
      return list.concat().sort();
    },

    addNewHashtag: function() {
      var newOne = this.prependHashtag(this.newHashtag);
      this.chosenHashtags.push(newOne);
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
      if (value.charAt(0) === '#') return value.substring(1);
      return value;
    },

    prependHashtag: function(value) {
      if (value.charAt(0) !== '#') return '#' + value;
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
