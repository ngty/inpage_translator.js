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

   <p class='lang-en' >
     some english content
   </p>
   <p class='lang-zh' >
     中文内容
   </p>

   Depending on the user's browser language, either the English (en) or the 
   Chinese (zh) content will be displayed.

3. The default language is 'en', it is possible to override this by setting:
   
   InpageTranslator.DefaultLanguage = 'fr'

   (see script inpage_translator.js)

=== Caveats

1. If user's browser is using a language not anticipated on the page, the 
   default language 'en' will be displayed instead (see section <Usage> point 3)

2. If all contents don't match both browser and default language, all contents
   will be displayed

3. If the browser's javascript support is turned off, all contents will be 
   displayed

# __END__
