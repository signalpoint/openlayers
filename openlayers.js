/**
 * Implements hook_field_widget_form().
 */
function openlayers_field_widget_form(form, form_state, field, instance, langcode, items, delta, element) {
  try {
    // For now just map the widget to the geofield widget.
    geofield_field_widget_form(form, form_state, field, instance, langcode, items, delta, element);
  }
  catch (error) { console.log('openlayers_field_widget_form - ' + error); }
}

/**
 * Implements hook_assemble_form_state_into_field().
 */
function openlayers_assemble_form_state_into_field(entity_type, bundle,
  form_state_value, field, instance, langcode, delta, field_key) {
  try {
    // For now just map the assembly to the geofield module.
    geofield_assemble_form_state_into_field(entity_type, bundle, form_state_value, field, instance, langcode, delta, field_key);
  }
  catch (error) {
    console.log('openlayers_assemble_form_state_into_field - ' + error);
  }
}

