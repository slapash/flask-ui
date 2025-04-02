// static/js/utils.js

/**
 * Generate a unique ID for component accessibility
 * @param {string} prefix - A prefix for the ID
 * @returns {string} A unique ID
 */
function generateId(prefix = 'ui') {
    return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
  }
  
  /**
   * A simple event delegation helper
   * @param {string} selector - CSS selector to match against
   * @param {string} eventType - The event type to listen for
   * @param {Function} callback - The callback function
   * @param {Element} parent - The parent element to attach the listener to (defaults to document)
   */
  function delegate(selector, eventType, callback, parent = document) {
    parent.addEventListener(eventType, (event) => {
      if (event.target.matches(selector)) {
        callback(event);
      }
    });
  }
  
  /**
   * Trap focus within an element (for modals/dialogs)
   * @param {Element} element - The element to trap focus within
   */
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    function handleTabPress(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    
    element.addEventListener('keydown', handleTabPress);
    firstElement.focus();
    
    return () => {
      element.removeEventListener('keydown', handleTabPress);
    };
  }
  
  /**
   * Dismiss an element when clicking outside of it
   * @param {Element} element - The element to dismiss
   * @param {Function} callback - The callback function to run when dismissed
   */
  function clickOutside(element, callback) {
    function handleClick(event) {
      if (!element.contains(event.target)) {
        callback();
      }
    }
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }
  
  /**
   * Escape key handler
   * @param {Function} callback - The callback function to run on Escape
   */
  function escapeKey(callback) {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }
  
  /**
   * Simple debounce function
   * @param {Function} fn - The function to debounce
   * @param {number} delay - The delay in ms
   */
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }