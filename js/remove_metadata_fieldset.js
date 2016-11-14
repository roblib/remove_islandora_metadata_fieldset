/**
 * @file custom_module.js
 * Custom Module main JavaScript file.
 *
 * You will need to get rid of the comments.
 * For how to add this file to your module, see https://drupal.org/node/304255
 */

(function ($) {

  Drupal.behaviors.open_metadata_fieldset = {

    attach: function (context, settings) {

      console.log('Hello world');

	  $('fieldset.islandora-metadata .fieldset-legend', context).unwrap().wrap( '<h2 class="metadata label"></h2>' );
	  $('fieldset.islandora-metadata .fieldset-wrapper', context).unwrap().addClass( "metadata" );

    }
  };
})(jQuery);
