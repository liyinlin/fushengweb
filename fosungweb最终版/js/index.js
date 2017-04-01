//$('#nav .ls').mouseover(function (){
//			var i=$('.nav .ls').index(this);
//			console.log(i);
//			$('#nav .ls .ss').eq(i).show().stop().animate({height:'300px'},200)
//		})
//$('#nav .ls').mouseout(function (){
//	var i=$('#nav .ls').index(this);
//	$('#nav .ls .ss').eq(i).stop().animate({height:'0px'},200,function (){
//		$('#nav .ls .ss').eq(i).hide();
//	})
//})
$(function(){
$('#nav .ls').mouseenter(function (){
	var i=$('.nav .ls').index(this);
	$('#nav .ls .ss').eq(i).slideDown(100);
})
$('#nav .ls').mouseleave(function (){
	var i=$('#nav .ls').index(this);
	$('#nav .ls .ss').eq(i).slideUp(100);
})

$(".ss-cen").each(function(){
		$(this).hover(function (){
			$(this).children().first().css("color","#00c1e0"); 
		},function (){
			$(this).children().first().css("color","#fff"); 
		})
	});
})
/**********************滚动***********/
$(function (){
	var imw=$('#jh img').eq(0).width();
	var sd=$('#jh').html();
	$('#nh').html(sd);
	var tim=null;
	var n=0;
	var l=true;
	$('#sp').click(function (){
		clearInterval(tim);
		if(l){
			l=false;
			n++;
			console.log(n);
			if(n>$('#jh img').length-1){
				n=0;
			}
			$('#ds').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		}
		qido();
	})
	$('#rp').click(function (){
		clearInterval(tim);
		if(l){
			l=false;
			n--;
			if(n<0){
				n=$('#jh img').length-1;
			}
			$('#ds').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		}
		qido();
	})
	qido();
	function qido(){
		tim=setInterval(function (){
			n++;
			if(n>$('#jh img').length-1){
				n=0;
			}
			$('#ds').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		},3000)
	}
	$('#ds').hover(function (){
		clearInterval(tim);
	},function (){
		qido();
	})
})
/***************************滚动2***************************/
$(function (){
	var imw=$('#jhh img').eq(0).width()+30;
	var sd=$('#jhh').html();
	$('#nhh').html(sd);
	var tim=null;
	var n=0;
	var l=true;
	$('#sph').click(function (){
		clearInterval(tim);
		if(l){
			l=false;
			n++;
			console.log(n);
			if(n>$('#jhh img').length-1){
				n=0;
			}
			$('#dsh').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		}
		qido();
	})
	$('#rph').click(function (){
		clearInterval(tim);
		if(l){
			l=false;
			n--;
			if(n<0){
				n=$('#jhh img').length-1;
			}
			$('#dsh').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		}
		qido();
	})
	qido();
	function qido(){
		tim=setInterval(function (){
			n++;
			if(n>$('#jhh img').length-1){
				n=0;
			}
			$('#dsh').animate({scrollLeft:imw*n},function (){
				l=true;
			})
		},4000)
	}
	$('#dsh').hover(function (){
		clearInterval(tim);
	},function (){
		qido();
	})
})
function gundo(a,b,c,d,e){
				// a=jh b=nh c=sp d=ds e=rp 
				var imw=$(a+' img').eq(0).width();
//				console.log(imw);
				var sd=$(a).html();
				$(b).html(sd);
				var tim=null;
				var n=0;
				var l=true;
				$(c).click(function (){
					clearInterval(tim);
					if(l){
						l=false;
						n++;
						console.log(n);
						if(n>$(a+' img').length-1){
							n=0;
						}
						$(d).animate({scrollLeft:imw*n},function (){
							l=true;
						})
					}
					qido();
				})
				$(e).click(function (){
					clearInterval(tim);
					if(l){
						l=false;
						n--;
						if(n<0){
							n=$(a+' img').length-1;
						}
						$(d).animate({scrollLeft:imw*n},function (){
							l=true;
						})
					}
					qido();
				})
				qido();
				function qido(){
					tim=setInterval(function (){
						n++;
						if(n>$(a+' img').length-1){
							n=0;
						}
						$(d).animate({scrollLeft:imw*n},function (){
							l=true;
						})
					},3000)
				}
				$(d).hover(function (){
					clearInterval(tim);
				},function (){
					qido();
				})
			}
		// a=jh b=nh c=sp d=ds e=rp 	
	gundo('#jhs','#nhs','#sps','#dss','#rps');
	gundo('#jhs1','#nhs1','#sps1','#dss1','#rps1');
	gundo('#jhs2','#nhs2','#sps2','#dss2','#rps2');
/***************************点击拉开***************************/
$(function (){
			var a=1;
			$('.lycli').eq(0).click(function (){
				if(a){
					$('.lycli').css({'background':'url(img/lyxj.png) 205px center no-repeat','background-size': '20px'})
					a=0;
				}else {
					$('.lycli').css({'background':'url(img/sjt-1.png) 205px center no-repeat','background-size': '20px'});
					a=1;
				}
				$('.lyno').slideToggle();
			})
		})