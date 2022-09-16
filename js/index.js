$(function () {
  $('#jstree').jstree({
    core: {
      check_callback: true,
    },
    plugins: ['contextmenu', 'dnd']
  });

  $('#jstree').on('changed.jstree', function (e, data) {
    console.log(data);
  })
});