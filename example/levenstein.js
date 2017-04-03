
function LevenshteinDistance(list1, list1Length, list2, list2Length, additionalLookupCost) {
  this.list1 = list1;
  this.list2 = list2;
  this.list1Length = list1Length;
  this.list2Length = list2Length;
  this.additionalLookupCost = additionalLookupCost;
}

LevenshteinDistance.prototype.compare = function (callBack) {
  var previousResults = [],
    currentResults = [],
    list2CurrentIndexLength,  
    list2CurrentIndex,
    currentList1Word, currentList2Word,
    i, t, w, p, y, list1Str, list2Str,
    list2Str, cost,
    first, second,
    current;

  for (i = 0; i < this.list1Length; i++) {
    for (t = 0; t < this.list2Length; t++) {    
      list2CurrentIndex = this.list2[t];        
      list2CurrentIndexLength = list2CurrentIndex.length;

      // If the two strings from the list match, the cost is zero.
      if(this.list1[i] === this.list2[t]) {
        continue;
      }

      // Fill the current list with the index of the List1 item
      previousResults = new Array(list2CurrentIndexLength);
      for (p = 0; p <= list2CurrentIndexLength; p++) {
        previousResults[p] = p;
      }

      for (y = 0; y < list1[i].length; y++) {
        // Get the letter from each word in List1.
        list1Str = this.list1[i].charAt(y);
        currentList1Word = this.list1[i];

        for (w = 0; w < list2CurrentIndexLength; w++) {
          // Get the letter from each word in List2.
          list2Str = list2CurrentIndex.charAt(w);
          cost = list1Str === list2Str ? 0 : 1;
          first = previousResults[w];
          second = previousResults[w + 1];
          current = currentResults[currentResults.length - 1];

          if (w === 0) {
            currentResults[0] = previousResults[w] + 1;
          }        

          if(additionalLookupCost === true) {
            currentResults[w + 1] = Math.min(first, second, isNaN(current) ? Infinity : current) + cost !== 0 ? additionalCosts[list1Str + list2Str] : cost;
          } else {
            currentResults[w + 1] = Math.min(first, second, isNaN(current) ? Infinity : current) + cost;
          }        
        }

        previousResults = currentResults;
        currentResults = [];
      }    
      console.log(this.list1[i] + " to " + list2CurrentIndex + " = " + previousResults[previousResults.length - 1]);
    }
  }
  
  callBack(moment());
}
