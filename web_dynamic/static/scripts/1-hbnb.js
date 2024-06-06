$(document).ready(function() {
    const selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            selectedAmenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete selectedAmenities[$(this).data('id')];
        }
        
        const amenityNames = Object.values(selectedAmenities);
        $('div.amenities h4').text(amenityNames.join(', '));
    });
});
