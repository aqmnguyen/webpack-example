import $ from 'jquery';

const name = 'Michael';
const lastName = 'Nguyen';

$('.name .first').append(`${name}`);
$('.name .last').html(`${lastName}`);

