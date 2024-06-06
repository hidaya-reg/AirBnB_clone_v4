$(document).ready(function() {
    const selectedAmenities = {};
    const selectedLocations = { states: [], cities: [] };

    $('input[type="checkbox"]').change(function() {
        const dataId = $(this).data('id');
        const dataName = $(this).data('name');

        if ($(this).is(':checked')) {
            if ($(this).parent().parent().parent().hasClass('locations')) {
                if ($(this).parent().parent().hasClass('state')) {
                    selectedLocations.states.push(dataId);
                } else {
                    selectedLocations.cities.push(dataId);
                }
            } else {
                selectedAmenities[dataId] = dataName;
            }
        } else {
            if ($(this).parent().parent().parent().hasClass('locations')) {
                if ($(this).parent().parent().hasClass('state')) {
                    selectedLocations.states = selectedLocations.states.filter(id => id !== dataId);
                } else {
                    selectedLocations.cities = selectedLocations.cities.filter(id => id !== dataId);
                }
            } else {
                delete selectedAmenities[dataId];
            }
        }

        const amenityNames = Object.values(selectedAmenities);
        $('div.amenities h4').text(amenityNames.join(', '));

        const locationNames = [];
        $('div.locations input:checked').each(function() {
            locationNames.push($(this).data('name'));
        });
        $('div.locations h4').text(locationNames.join(', '));
    });

    $.get('http://0.0.0.0
