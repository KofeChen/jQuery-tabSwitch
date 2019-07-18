document.querySelectorAll('.header .tab').forEach(function(node) {
    var index
    node.addEventListener('click', function() {
        node.parentElement.querySelectorAll('.tab').forEach(function(tab, idx) {
            tab.classList.remove('active')
            if(node === tab) {
                index = idx
            }
        })
        node.classList.add('active')

        node.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel) {
            panel.classList.remove('active')
        })
        node.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')
    })
})