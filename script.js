<script>
	// Retrieve the dynamic content from the URL parameter
	const urlParams = new URLSearchParams(window.location.search);
	const dynamicContent = urlParams.get('content');
	
	// Insert the dynamic content into the placeholder element
	const dynamicContentEl = document.getElementById('dynamic-content');
	dynamicContentEl.innerHTML = dynamicContent;
</script>
