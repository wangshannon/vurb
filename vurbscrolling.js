// Criteria:
// ● Design a class that makes this functionality portable. How would you design the
// interface/event handling so that this class can be used for other repeating DOM nodes?
// ○ Note: We don’t need this to be implemented in Task 1. We want to see how you
// design this so just exposing the public interface with methods/variables and
// pseudo­code/documentation to clearly demonstrate how it would be
// implemented.
// ● Only visible (and soon to be visible) cards should have content loaded, the rest should
// utilize Technique #5 mentioned in the link above
// ● When swapping out the card DOM node with a placeholder, there should be no
// noticeable transition
// ● If we were to add auto­pagination when scrolling to the bottom, how would this be
// handled? Who initiates the request, parses the JSON, and renders the view?

//Pseudocode

function smoothScrolling (doms) {
	var empties = ()
	for (card in doms) {
		if (card.offsetParent == null) { //if the card isn't on the screen
			var cardIndex = index of card;
			doms[cardIndex - 2] = replace css src of image with smaller image;
			doms[cardIndex - 3] = set css visiblity: hidden;
			doms[cardIndex - 4] = doms.replaceChild(emptycard, card);
			for (each in emptycard) {
				empties += each;
				delete each;
			}
		}
	}
}

//When user reaches last card on original page, load the next page automatically and parse JSON
//data from that page. 