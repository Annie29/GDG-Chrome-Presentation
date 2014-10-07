// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
  chrome.extension.getBackgroundPage().console.log(command);
  if(command == "toggle-pin") 
  {
    // Get the currently selected tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the pinned status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': true});    
	});
	chrome.extension.getBackgroundPage().console.log('pinned');
  }
  
  else if(command == "unpin")
  {
	// Get the currently selected tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the pinned status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': false});
	  chrome.extension.getBackgroundPage().console.log('unpinned');
    });
  }
  else if(command == "toggle")
  {
	// Get the currently selected tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Toggle the pinned status
      var current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': !current.pinned});
	  chrome.extension.getBackgroundPage().console.log('toggled');
    });
  }
  else
  {
	chrome.extension.getBackgroundPage().console.log('press');
  }
});
