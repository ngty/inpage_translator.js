// $Id: NgTzeYang [ngty77@gmail.com] 09 Nov 2008 15:25 $
// ---
//
// Copyright (c) 2008 Ng Tze Yang <ngty77@gmail.com>
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// For details, see http://github.com/ngty/inline_js_translator/tree
//

var InpageTranslator = {

  Version         : '0.1.0',
  DefaultLanguage : 'en',
  _debugLanguage  : null, // intended for debug purpose 

  browserLanguage: function() {
    if(this._debugLanguage) {
      return this._debugLanguage;
    } else if(navigator.userLanguage) {    // IE
      return navigator.userLanguage;
    } else if(navigator.language) {        // FF
      return navigator.language;
    };
  },

  detectLanguage: function() {
    return ( this.browserLanguage() || this.DefaultLanguage ).split('-')[0];
  },

  langSelector: function() {
    var lang = this.detectLanguage(), klass = 'lang-'+lang;
    return $('*').hasClass(klass) ? ('.'+klass) : null;
  },

  work: function() {
    var selector = this.langSelector();
    if(selector) {
      $(selector).show();
      $('*[class^=lang-]').not(selector).hide();
    };
  }

};

//
// Available Customizations:
// InpageTranslator.DefaultLanguage = 'en';
//

$(document).ready(function(){
  InpageTranslator.work();
});

// __END__
