$(function(){var l=$("#width"),t=$("#height"),e=$("#calculate"),c=$("#perimeter"),i=$("#area");e.click(function(){var e=Number(l.val()),a=Number(t.val()),r=new Rectangle(e,a);c.val(r.perimeter()),i.val(r.area())})});