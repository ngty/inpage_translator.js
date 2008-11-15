=== inpage_translator.js

- [Code on GitHub] http://github.com/ngty/inpage_translator.js

=== Description

Provides an alternative multi-language support for:

- webpages that cannot implement server-side processing to correctly display 
  contents of the appropriate languages, eg. free blogs, static webpages

- multilingual content writers that hate maintaining different files for
  contents of different languages

=== Usage

1. Add the following <script/> tags to ur htmls:

   <script type="text/javascript" 
     src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js">
   </script>
   <script type="text/javascript" src="inpage_translator.js"></script>

   OR:

   <script type="text/javascript"
     src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js">
   </script>
   <script type="text/javascript" >...</script>

   Where '...' is the entire content of inpage_translator_min.js script.

2. For any content that should support multiple languages, write your contents
   as followings:

   <p class='lang-en' > ... </p>
   <p class='lang-zh' > ... </p>

   Depending on the user's browser language, either the English (en) or the 
   Chinese (zh) content will be displayed.

3. Instead of having the translator decides which language to display, user can 
   choose the language for display (or show contents of all languages) from the 
   generated language select dropdown. 
   
   It is possible to override the look & feel of this dropdown by:

   InpageTranslator.LangMenuCss['div'] = { ... }
   InpageTranslator.LangMenuCss['select'] = { ... }

   (see script inpage_translator.js)

=== Caveats

1. If user's browser is using a language not anticipated on the page, the 
   1st detected language will be displayed, eg.
   
   <p class='lang-zh' > ... </p>
   <p class='lang-en' > ... </p>

   for the above, 'zh' comes before 'en', thus 'zh' content will be displayed.

2. If the browser's javascript support is turned off, all contents will be 
   displayed

# __END__
