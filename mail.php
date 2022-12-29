<?php
//print_r($_POST); die;
if (isset($_POST['submit']))
{
$name = $_REQUEST['Name'];
$tel = $_REQUEST['phone'];
$email = $_REQUEST['Email'];
// $message = $_REQUEST['message'];

if($name == ''){
    $data['error'] = "Please enter your name";
    header('Content-type: application/json');
	echo  json_encode($data,JSON_PRETTY_PRINT);
	return false;
}
if($email == ''){
    $data['error'] = "Please enter your email";
    header('Content-type: application/json');
	echo  json_encode($data,JSON_PRETTY_PRINT);
	return false;
}
if($tel == ''){
    $data['error'] = "Please enter your phone no.";
    header('Content-type: application/json');
	echo  json_encode($data,JSON_PRETTY_PRINT);
	return false;
}

$to ="drsajalhalder@gmail.com, info@orangetreehealth.com, webcream01@gmail.com";
$subject = "Rhinoplasty Surgery - Orange Tree";

$message = "
<html>
<head>
</head>
<body>
<table>
<tr>
<th>Name</th>
<td>$name</td>
</tr>
<tr>
<th>Mobile</th>
<td>$tel</td>
</tr>
<tr>
<th>Email ID</th>
<td>$email</td>
</tr>

</table>
</body>
</html>
";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8". "\r\n";
// More headers
$headers .= 'From: <help@orangetreehealth.com>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";
$mail = mail($to,$subject,$message,$headers);
$to1 = $email;
$subject1 = "Get the Nose You Want - Orange Tree";
$message1 = '
<table width="700" cellpadding="0" cellspacing="0" align="center" style="background:#ffffff; border:solid 1px #ccc; border-top:5px solid #082B51; font:normal 15px arial; text-align:justify; color:#333333;">
	<tr>
		<td align="center">
			<table width="690" border="0" hspace="0" vspace="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="1px solid #082B51">
				<tr>
					<td align="center">
						<table width="650" border="0" hspace="0" vspace="0" cellpadding="0" cellspacing="0">
							<tr>
						<td height="30"></td>
							</tr>
							<tr>
								<td align="left" style="line-height:22px;">
									<img width="200px; padding-bottom: 10px: border-bottom:solid 2px #082B51" src="https://www.orangetreehealth.com/gynecomastia-surgery-in-delhi/images/logo.png" alt="Orange Tree Health Logo">

									<br><br>

									<strong style="color:#082B51; font-weight:bolder;"><b style="color:#082B51; font-size:20px; line-height:40px;">Visible results within 6 months</b></strong>
									<br/><br/>
Dear,<br> <br>
Welcome to Orange Tree Clinic, Best Cosmetic Plastic Surgery, Hair Care in Delhi, Kolkata and Manipur. <br> <br>
Orange Tree Aesthetic & Hair Restoration Centre is one of the top medical tourism destinations for advanced Hair Transplant (Direct No Touch FUE technique) and Cosmetic Surgery in Delhi/NCR, Kolkata and Manipur. Founder and Director Dr. Sajal Halder, is the alumni of AIIMS (New Delhi) and a Board Certified Plastic Surgeon.<br> <br>
Why Choose Orange Tree Clinic:<br><br>

Invisible Scar & Painless Procedure<br><br>
AIIMS Certified Surgeon<br><br>
20+ Years of Experience<br><br>
3 Hours Surgery<br><br>
No Scars & No Stitches <br><br>

Frequently Asked Questions:<br><br>
Q.1 - How long do facelifts last? <br><br>
Ans -The changes brought by the surgery are not inevitable and may naturally fade away with age. However, the facelift surgery effects can last over 10 years. <br><br>

Q.2 - What is the best age to get a facelift? <br><br>
Ans - Facelift is a viable option for people in their 40s, 50s, and 60s when signs of aging begin to become prevalent such as deep lines, wrinkles, fine lines, and sagging skin. These can be best corrected through surgical techniques rather than non-surgical ones.<br><br>

Q.3 - What is the recovery time after facelift surgery? <br><br>
Ans - After facelift surgery, it takes up to 2-4 weeks to recover and look back to normal. It is important to take care of your skin, as a facelift doesn’t stop the skin from aging. 
<br><br>

<br><br>

								</td>
							</tr>
							<tr>
								<td height="45"></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
';
// Always set content-type when sending HTML email
$headers1 = "MIME-Version: 1.0" . "\r\n";
$headers1 .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers1 .= 'From: <help@orangetreehealth.com>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";
$mail1 = mail($to1,$subject1,$message1,$headers1);
if($mail1)
{
	//$msg ="Thanks for filling out our form";
	header("Location:thank-you-page.php");
	exit();
}else{
	//header("Location: contact.php?status=error");
	//exit();
	$msg ="Not Submit";
}
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Thank You For Submiting Details</title>
<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
}
::-webkit-scrollbar {
    display: none;
}
section, article, aside, header, footer, nav, dialog, figure {
	display: block;
	clear:both;
}
ul, ol {
	list-style: none;
}
img { width:100%; }
.banner {width:100%; height:100%; display:block; background-repeat: no-repeat; -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; }
</style>

</head>

  <body>

  </body>
</html>
