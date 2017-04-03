# Levenshtein Distance

Calculate the levenshtein distance between strings.

Pass in two arrays. The code will enumerate each word in the first list against each word in the second list.

~~~~
var list1 = ["One", "Two", "Three"];
var list2 = ["Four", "Two", "Seven"];

var levenshteinDistance = new LevenshteinDistance(list1, list1.length, list2, list2.length);
levenshteinDistance.compare();
~~~~
