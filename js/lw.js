function inner() {

    var box = document.getElementsByClassName('photo')[0];
    if (box) {


        function init() {
            var width = box.offsetWidth;
            var count = parseInt(width / 1920 * 1280);
            for (var i = 0; i < count; i++) {
                var size = parseInt(ran(200, 120) / 10);
                var ele = document.createElement('div');
                ele.classList.add('item');
                ele.style.width = size + 'px';
                ele.style.height = size + 'px';
                ele.style.left = ran(0, 95) + '%';
                ele.style.top = ran(20, 80) + '%';
                ele.style.animationDelay = ran(0, 30) / 10 + 's';
                box.appendChild(ele);
            }
        }

        function ran(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        init();


        setInterval(function () {
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w1').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w2').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w3').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w4').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w5').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w6').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w7').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w8').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w9').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w10').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w11').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w12').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w13').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w14').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w15').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w16').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w17').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w18').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w19').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w20').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w21').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w22').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w23').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w24').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w25').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w26').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w27').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w28').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w29').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w30').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w31').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w32').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w33').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w34').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w35').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w36').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w37').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w38').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w39').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w40').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w41').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w42').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w43').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w44').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w45').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w46').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w47').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w48').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w49').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
        }, 2000)

    }
}
// var usename = ['wjy', 'hyj', 'sjb']
var use_name = document.getElementById('use')
var btn = document.getElementById('btn');
//  var body = document.getElementsByTagName('body')[0]
//  console.log(body)
btn.onclick = function () {
    // if(use_name.value === '吴静玉'){
    //     wjy()
    // }else if(use_name.value === '胡洋杰'){
    //     hyj()
    // }else if(use_name.value === '沈建博'){
    //     sjb()
    // }else{
    //     alert('没你啥事')
    // }

    switch(use_name.value){
        case '章育芳': zyf();
        break;
        case '杨晓东': yxd();
        break;
        case '袁昕': yx();
        break;
        default: alert('没你啥事');
    }
    inner()
}



function yxd(){
    document.body.innerHTML = `<div class="photo">
                                
                                
                                <img  height: auto; width: auto\9; width:100%;  src="../img/d.jpg" >

                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/薛之谦 - 为了遇见你.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">东哥早日脱单</div>
                                <div class='w' id="w2">东哥你最帅</div>
                                <div class='w' id="w3">东哥越来越帅</div>
                                <div class='w' id="w4">东哥教师节快乐</div>
                                <div class='w' id="w5">东哥玉树临风</div>
                                <div class='w' id="w6">东哥身体健康</div>
                                <div class='w' id="w7">东哥天天开心</div>
                                <div class='w' id="w8">东哥一天比一天帅</div>
                                <div class='w' id="w9">东哥英俊潇洒</div>
                                <div class='w' id="w10">东哥教师节快乐</div>
                                <div class='w' id="w11">东哥你真帅</div>
                                <div class='w' id="w12">东哥你最帅</div>
                                <div class='w' id="w13">东哥越来越帅</div>
                                <div class='w' id="w14">东哥教师节快乐</div>
                                <div class='w' id="w15">东哥越活越年轻</div>
                                <div class='w' id="w16">祝东哥早日脱单</div>
                                <div class='w' id="w17">东哥天天开心</div>
                                <div class='w' id="w18">东哥玉树临风</div>
                                <div class='w' id="w19">东哥英俊潇洒</div>
                                <div class='w' id="w20">东哥教师节快乐</div>
                                <div class='w' id="w21">东哥幸福每一天</div>
                                <div class='w' id="w22">东哥早日脱单</div>
                                <div class='w' id="w23">东哥你真帅</div>
                                <div class='w' id="w24">东哥你最帅</div>
                                <div class='w' id="w25">东哥越来越帅</div>
                                <div class='w' id="w26">东哥才华横溢</div>
                                <div class='w' id="w27">东哥越活越年轻</div>
                                <div class='w' id="w28">东哥身体健康</div>
                                <div class='w' id="w29">东哥天天开心</div>
                                <div class='w' id="w30">东哥一天比一天帅</div>
                                <div class='w' id="w31">东哥早日脱单</div>
                                <div class='w' id="w32">东哥风流倜傥</div>
                                <div class='w' id="w33">东哥你真帅</div>
                                <div class='w' id="w34">东哥你最帅</div>
                                <div class='w' id="w35">东哥英明神武</div>
                                <div class='w' id="w36">东哥教师节快乐</div>
                                <div class='w' id="w37">东哥越活越年轻</div>
                                <div class='w' id="w38">东哥身体健康</div>
                                <div class='w' id="w39">东哥天天开心</div>
                                <div class='w' id="w40">东哥器宇轩昂</div>
                                <div class='w' id="w41">东哥早日脱单</div>
                                <div class='w' id="w42">东哥教师节快乐</div>
                                <div class='w' id="w43">祝东哥幸福每一天</div>
                                <div class='w' id="w44">东哥你真帅</div>
                                <div class='w' id="w45">东哥你最帅</div>
                                <div class='w' id="w46">东哥越来越帅</div>
                                <div class='w' id="w47">东哥教师节快乐</div>
                                <div class='w' id="w48">东哥越活越年轻</div>
                                <div class='w' id="w49">东哥身体健康</div>
                                <div class='w' id="w50">东哥越来越帅</div>`
}


function zyf(){
    document.body.innerHTML = `<div class="photo">
                                     <img  height: auto; width: auto\9; width:100%;  src="../img/z.jpg">
                                    <!--<video src="../video/95e5ef2c7d1c4acfcce0caedbebf231d.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>-->
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/zj.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">章姐你真美</div>
                                <div class='w' id="w2">祝章姐开心每一天</div>
                                <div class='w' id="w3">祝章姐教师节快乐</div>
                                <div class='w' id="w4">祝章姐永远十八岁</div>
                                <div class='w' id="w5">祝章姐越来越美</div>
                                <div class='w' id="w6">祝章姐身体健康</div>
                                <div class='w' id="w7">祝章姐身体健康</div>
                                <div class='w' id="w8">章姐美若天仙</div>
                                <div class='w' id="w9">章姐美丽动人</div>
                                <div class='w' id="w10">章姐蕙质兰心</div>
                                <div class='w' id="w11">章姐你真美</div>
                                <div class='w' id="w12">祝章姐开心每一天</div>
                                <div class='w' id="w13">祝章姐教师节快乐</div>
                                <div class='w' id="w14">祝章姐永远十八岁</div>
                                <div class='w' id="w15">祝章姐越来越美</div>
                                <div class='w' id="w16">章姐天生丽质</div>
                                <div class='w' id="w17">章姐美若天仙</div>
                                <div class='w' id="w18">章姐美丽动人</div>
                                <div class='w' id="w19">章姐蕙质兰心</div>
                                <div class='w' id="w20">祝章姐开心每一天</div>
                                <div class='w' id="w21">章姐你真美</div>
                                <div class='w' id="w22">祝章姐教师节快乐</div>
                                <div class='w' id="w23">祝章姐永远十八岁</div>
                                <div class='w' id="w24">祝章姐越来越美</div>
                                <div class='w' id="w25">祝章姐身体健康</div>
                                <div class='w' id="w26">章姐天生丽质</div>
                                <div class='w' id="w27">章姐美若天仙</div>
                                <div class='w' id="w28">章姐美丽动人</div>
                                <div class='w' id="w29">章姐蕙质兰心</div>
                                <div class='w' id="w30">祝章姐开心每一天</div>
                                <div class='w' id="w31">章姐你真美</div>
                                <div class='w' id="w32">祝章姐开心每一天</div>
                                <div class='w' id="w33">祝章姐教师节快乐</div>
                                <div class='w' id="w34">祝章姐永远十八岁</div>
                                <div class='w' id="w35">祝章姐越来越美</div>
                                <div class='w' id="w36">祝章姐身体健康</div>
                                <div class='w' id="w37">章姐天生丽质</div>
                                <div class='w' id="w38">章姐美若天仙</div>
                                <div class='w' id="w39">章姐美丽动人</div>
                                <div class='w' id="w40">章姐蕙质兰心</div>
                                <div class='w' id="w41">章姐你真美</div>
                                <div class='w' id="w42">祝章姐开心每一天</div>
                                <div class='w' id="w43">祝章姐教师节快乐</div>
                                <div class='w' id="w44">祝章姐永远十八岁</div>
                                <div class='w' id="w45">祝章姐越来越美</div>
                                <div class='w' id="w46">祝章姐身体健康</div>
                                <div class='w' id="w47">章姐天生丽质</div>
                                <div class='w' id="w48">章姐美若天仙</div>
                                <div class='w' id="w49">章姐美丽动人</div>
                                <div class='w' id="w50">章姐蕙质兰心</div>`
}
function yx(){
    document.body.innerHTML = `<div class="photo">
                                     <img  height: auto; width: auto\9; width:100%;  src="../img/x.jpg" >
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/wxh.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" >
                                <div class='w' id="w1">昕姐你真美</div>
                                <div class='w' id="w2">祝昕姐开心每一天</div>
                                <div class='w' id="w3">祝昕姐教师节快乐</div>
                                <div class='w' id="w4">祝昕姐永远十八岁</div>
                                <div class='w' id="w5">祝昕姐越来越美</div>
                                <div class='w' id="w6">祝昕姐身体健康</div>
                                <div class='w' id="w7">祝昕姐身体健康</div>
                                <div class='w' id="w8">昕姐美若天仙</div>
                                <div class='w' id="w9">昕姐美丽动人</div>
                                <div class='w' id="w10">昕姐蕙质兰心</div>
                                <div class='w' id="w11">昕姐你真美</div>
                                <div class='w' id="w12">祝昕姐开心每一天</div>
                                <div class='w' id="w13">祝昕姐教师节快乐</div>
                                <div class='w' id="w14">祝昕姐永远十八岁</div>
                                <div class='w' id="w15">祝昕姐越来越美</div>
                                <div class='w' id="w16">昕姐天生丽质</div>
                                <div class='w' id="w17">昕姐美若天仙</div>
                                <div class='w' id="w18">昕姐美丽动人</div>
                                <div class='w' id="w19">昕姐蕙质兰心</div>
                                <div class='w' id="w20">祝昕姐开心每一天</div>
                                <div class='w' id="w21">昕姐你真美</div>
                                <div class='w' id="w22">祝昕姐教师节快乐</div>
                                <div class='w' id="w23">祝昕姐永远十八岁</div>
                                <div class='w' id="w24">祝昕姐越来越美</div>
                                <div class='w' id="w25">祝昕姐身体健康</div>
                                <div class='w' id="w26">昕姐天生丽质</div>
                                <div class='w' id="w27">昕姐美若天仙</div>
                                <div class='w' id="w28">昕姐美丽动人</div>
                                <div class='w' id="w29">昕姐蕙质兰心</div>
                                <div class='w' id="w30">祝昕姐开心每一天</div>
                                <div class='w' id="w31">昕姐你真美</div>
                                <div class='w' id="w32">祝昕姐开心每一天</div>
                                <div class='w' id="w33">祝昕姐教师节快乐</div>
                                <div class='w' id="w34">祝昕姐永远十八岁</div>
                                <div class='w' id="w35">祝昕姐越来越美</div>
                                <div class='w' id="w36">祝昕姐身体健康</div>
                                <div class='w' id="w37">昕姐天生丽质</div>
                                <div class='w' id="w38">昕姐美若天仙</div>
                                <div class='w' id="w39">昕姐美丽动人</div>
                                <div class='w' id="w40">昕姐蕙质兰心</div>
                                <div class='w' id="w41">昕姐你真美</div>
                                <div class='w' id="w42">祝昕姐开心每一天</div>
                                <div class='w' id="w43">祝昕姐教师节快乐</div>
                                <div class='w' id="w44">祝昕姐永远十八岁</div>
                                <div class='w' id="w45">祝昕姐越来越美</div>
                                <div class='w' id="w46">祝昕姐身体健康</div>
                                <div class='w' id="w47">昕姐天生丽质</div>
                                <div class='w' id="w48">昕姐美若天仙</div>
                                <div class='w' id="w49">昕姐美丽动人</div>
                                <div class='w' id="w50">昕姐蕙质兰心</div>`
}
