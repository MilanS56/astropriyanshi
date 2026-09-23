import type { ConsultationEnquiry } from "@/lib/consultation-enquiries";
import type { Consultation } from "@/lib/consultations";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return entities[character];
  });
}

const labelStyle = "margin:0 0 14px;color:#555b64;font:11px/18px Arial,Helvetica,sans-serif;letter-spacing:2px;font-weight:bold;";
const logoUrl = "https://priyanshiiaasttro.com/images/logo/priyanshii-logo.png";

function frame(title: string, content: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background-color:#f8f4ec;color:#030c1c;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f4ec;"><tr><td align="center" style="padding:32px 12px;">
<!--[if mso]><table role="presentation" width="620" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background-color:#fffdf9;border:1px solid #e6dfd3;border-radius:12px;">
<tr><td style="padding:28px;background-color:#030c1c;border-radius:12px 12px 0 0;border-bottom:3px solid #F0B957;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle" style="padding:0 16px 0 0;"><img src="${logoUrl}" width="52" height="54" alt="PRIYANSHII AASTTRO" style="display:block;width:52px;height:54px;border:0;outline:none;text-decoration:none;" /></td>
<td valign="middle"><p style="margin:0;color:#f8f4ec;font:24px/30px Georgia,'Times New Roman',serif;letter-spacing:1px;white-space:nowrap;">PRIYANSHII AASTTRO</p>
<p style="margin:6px 0 0;color:#f8f4ec;font:10px/18px Arial,Helvetica,sans-serif;letter-spacing:3px;white-space:nowrap;">ASTROLOGY CONSULTANT</p></td>
</tr></table>
</td></tr>
<tr><td style="padding:32px 28px;font:15px/25px Arial,Helvetica,sans-serif;color:#030c1c;overflow-wrap:anywhere;word-break:break-word;">${content}</td></tr>
<tr><td style="padding:24px 28px;border-top:1px solid #e6dfd3;">
<p style="margin:0;color:#030c1c;font:15px/24px Georgia,'Times New Roman',serif;letter-spacing:1px;">PRIYANSHII AASTTRO</p>
<p style="margin:6px 0 0;color:#676b70;font:12px/20px Arial,Helvetica,sans-serif;">Guiding you toward clarity, balance &amp; purpose.</p>
</td></tr></table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr></table></body></html>`;
}

function consultationRows(consultations: readonly Pick<Consultation, "name">[]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #e6dfd3;">${consultations.map(({ name }) => `<tr><td style="padding:12px 16px;border-bottom:1px solid #e6dfd3;border-left:2px solid #F0B957;background-color:#f8f4ec;color:#030c1c;font:18px/26px Georgia,'Times New Roman',serif;">${escapeHtml(name)}</td></tr>`).join("")}</table>`;
}

export function createConsultationEmailTemplates(
  enquiry: ConsultationEnquiry,
  consultations: readonly Pick<Consultation, "name">[],
): { notificationHtml: string; acknowledgementHtml: string } {
  const name = escapeHtml(enquiry.name);
  const details = [["NAME", enquiry.name], ["EMAIL", enquiry.email], ["PHONE", enquiry.phone]];
  const message = escapeHtml(enquiry.message).replace(/\r\n|\r|\n/g, "<br>");
  const mailto = escapeHtml(`mailto:${encodeURIComponent(enquiry.email)}`);
  const selected = consultationRows(consultations);

  const notificationHtml = frame("New consultation enquiry", `
<h1 style="margin:0 0 14px;font:24px/32px Georgia,'Times New Roman',serif;font-weight:normal;">NEW CONSULTATION ENQUIRY</h1>
<p style="margin:0 0 28px;color:#555b64;">A new consultation enquiry has been received through your website.</p>
<h2 style="${labelStyle}">CONSULTATIONS</h2>${selected}
<h2 style="${labelStyle}margin-top:30px;">CLIENT DETAILS</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="table-layout:fixed;">${details.map(([label, value]) => `<tr><td width="25%" valign="top" style="padding:10px 8px 10px 0;border-bottom:1px solid #e6dfd3;color:#676b70;font:10px/24px Arial,Helvetica,sans-serif;letter-spacing:1px;">${label}</td><td valign="top" style="padding:10px 0;border-bottom:1px solid #e6dfd3;color:#030c1c;font:15px/24px Arial,Helvetica,sans-serif;overflow-wrap:anywhere;word-break:break-word;">${escapeHtml(value)}</td></tr>`).join("")}</table>
<h2 style="${labelStyle}margin-top:30px;">DETAILED CONCERN</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:20px;background-color:#f8f4ec;border:1px solid #e6dfd3;border-radius:8px;color:#030c1c;font:15px/26px Arial,Helvetica,sans-serif;overflow-wrap:anywhere;word-break:break-word;">${message}</td></tr></table>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;"><tr><td bgcolor="#030c1c" style="border-radius:6px;mso-padding-alt:14px 24px;"><a href="${mailto}" style="display:inline-block;padding:14px 24px;border:1px solid #030c1c;border-radius:6px;color:#f8f4ec;text-decoration:none;font:14px/22px Arial,Helvetica,sans-serif;font-weight:bold;">Reply to Client &rarr;</a></td></tr></table>`);

  const acknowledgementHtml = frame("Your enquiry has been received", `
<h1 style="margin:0 0 26px;font:32px/40px Georgia,'Times New Roman',serif;font-weight:normal;">Your enquiry has been received</h1>
<p style="margin:0 0 18px;">Hello ${name},</p>
<p style="margin:0 0 18px;">Thank you for reaching out to <strong>PRIYANSHII AASTTRO.</strong></p>
<p style="margin:0 0 18px;">We have received your consultation enquiry for:</p>
${selected}
<p style="margin:26px 0;">Priyanshii will review the details you've provided and get back to you using your contact information.</p>
<p style="margin:0 0 12px;">With warm regards,</p>
<p style="margin:0;font:18px/28px Georgia,'Times New Roman',serif;">PRIYANSHII AASTTRO</p>
<p style="margin:4px 0 0;color:#676b70;font-size:13px;">Astrology Consultant</p>`);

  return { notificationHtml, acknowledgementHtml };
}
