var  timerId;
var  searchBoxDom  =  document.getElementById('search-box');

// This represents a very heavy method. Which takes a lot of time to execute
function  makeAPICall() {
	var  debounceDom  =  document.getElementById('debounce-count');
	var  debounceCount  =  debounceDom.innerHTML  ||  0;
	
	debounceDom.innerHTML  =  parseInt(debounceCount) +  1
}

// Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
var  debounceFunction  =  function (func, delay) {
	// Cancels the setTimeout method execution
	clearTimeout(timerId)

	// Executes the func after delay time.
	timerId  =  setTimeout(func, delay)
}

// Event listener on the input box
searchBoxDom.addEventListener('input', function () {
	var  apiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  apiCallCountDom.innerHTML  ||  0;
	apiCallCount  =  parseInt(apiCallCount) +  1;

	// Updates the number of times makeAPICall method is called
	apiCallCountDom.innerHTML  =  apiCallCount;

	// Debounces makeAPICall method
	debounceFunction(makeAPICall, 200)
})