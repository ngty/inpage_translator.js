// $Id: NgTzeYang [ngty77@gmail.com] 15 Nov 2008 15:45 $
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
// For details, see http://github.com/ngty/inline_js_translator
//

var InpageTranslator = {

  Version     : '0.2.1',
  LangMenu    : $('<div id="inpage_traslator_menu"><select></select></div>'),
  LangOptions : { en:'English', zh:'中文' },
  AllLangs    : { en:'Show All', zh:'显示所有', _:'Show All' },

  LangMenuCss : { 
    div    : { position:'absolute', top:'40px', right:'10px', 'z-index':999 },
    select : { 'line-height':1, 'background-color':'#eee', border:'solid 1px #666', color:'#000' },
    },

  getSupportedLangs: function() {
    var hash = this.getSupportedLangsHash(), langs = [];
    return this._supportedLangs = this._supportedLangs || function() {
        for( lang in hash ) { langs.push(lang); }
        return langs; 
      }();
  },

  getSupportedLangsHash: function() {
    return this._supportedLangsHash = this._supportedLangsHash || function() {
      var hash = {};
      $.each( $('*[class^=lang-]'), function() {
        var lang = $(this).attr('class').replace(/lang-(\w+)/,'$1');
        hash[lang] = lang;
      } );
      return hash;
    }();
  },

  getBrowserLang: function() {
    return this._browserLang = this._browserLang || function() {
        if(navigator.userLanguage) {    
          return navigator.userLanguage;
        } else if(navigator.language) {        
          return navigator.language;
        } 
      }().split('-')[0];
  },

  getDetectedLang: function() {
    return this.SelectedLang || this.getBrowserLang() || this.getSupportedLangs()[0];
  },

  createLangMenu : function() {
    var me = this, sLangs = me.getSupportedLangs();
    me._createLangMenu || function() {
        me._createLangMenu = true;
        if(sLangs.length>1) { $('body').append(me.LangMenu); };
      }();
    return me;
  },

  createLangOption: function(lang) {
    var me = InpageTranslator, dLang = me.getDetectedLang(), oLangs = me.LangOptions, 
      aLangs = me.AllLangs, css = me.LangMenuCss;
    return $('<option></option>')
      .html( (lang!='_') ? (oLangs[lang]||lang.toUpperCase()) : (aLangs[dLang]||aLangs['_']) )
      .click( function() { 
        me.SelectedLang = lang || '--';
        me.updateLangMenu().work();
      } );
  },

  updateLangMenu: function() {
    var me = this, orders = me.getLangOptionsOrder(), options = [], css = me.LangMenuCss,
      select = me.LangMenu.css(css['div']).find('select').css(css['select']).empty();
    for( i in orders ) { 
      if(!$.isFunction(orders[i])) { 
        select.append( me.createLangOption(orders[i]) ); 
      };
    };
    return me;
  },

  getLangOptionsOrder: function() {
    var me = this, order = [ '_' ], hash = me.getSupportedLangsHash(), dLang = me.getDetectedLang();
    if(hash[dLang]) { order.unshift(dLang); };
    for( lang in hash ) { (hash[lang]!=hash[dLang]) && order.push(lang); };
    return order;
  },

  langClass: function() {
    var lang = this.getDetectedLang();
    return this.getSupportedLangsHash()[lang] && ('lang-'+lang);
  },

  work: function() {
    var klass = this.createLangMenu().updateLangMenu().langClass(), 
      elements = $('*[class^=lang-]').show();
    klass && elements.not('.'+klass).hide();
  }

};

//
// Supported Customization:
// ---
// InpageTranslator.LangMenuCss['div'] = 
//   { position:'absolute', top:'40px', right:'10px' };
// InpageTranslator.LangMenuCss['select'] = 
//   { 'background-color':'#eee', border:'solid 1px #666' };
//

$(document).ready(function(){
  InpageTranslator.work();
});

// __END__
