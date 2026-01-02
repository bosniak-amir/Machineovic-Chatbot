(function() {
  // Only create chatbot elements, don't cover the whole page
  const chatContainer = document.createElement('div');
  chatContainer.id = 'machineovic-chat-container';
  chatContainer.style.cssText = `
    position: fixed !important;
    bottom: 24px !important;
    right: 24px !important;
    width: 400px !important;
    height: 600px !important;
    z-index: 2147483647 !important;
    pointer-events: none !important;
  `;
  
  const iframe = document.createElement('iframe');
  iframe.id = 'machineovic-chatbot';
  iframe.src = 'https://bosniak-amir.github.io/machineovic-chatbot/';
  iframe.style.cssText = `
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    background: transparent !important;
    pointer-events: auto !important;
  `;
  
  chatContainer.appendChild(iframe);
  
  if (document.body) {
    document.body.appendChild(chatContainer);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(chatContainer);
    });
  }
  
  // Make container interactive when hovering near it
  document.addEventListener('mousemove', function(e) {
    const rect = chatContainer.getBoundingClientRect();
    const isNearChat = e.clientX >= rect.left - 50 && 
                       e.clientY >= rect.top - 50;
    chatContainer.style.pointerEvents = isNearChat ? 'auto' : 'none';
  });
  
  console.log('✅ Machineovic Chatbot loaded successfully');
})();
