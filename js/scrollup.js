
var top_show = 150; // � ����� ��������� ������ ��������� �������� ����� ������ "������"
var delay = 1000; // �������� ���������
$(document).ready(function() {
    $(window).scroll(function () { // ��� ��������� �������� � ��� �������
        /* � ����������� �� ��������� ������ ��������� � �������� top_show, �������� ��� ��������� ������ "������" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // ��� ����� �� ������ "������" �������� � ��� �������
        /* ������� ��������� ������ */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

