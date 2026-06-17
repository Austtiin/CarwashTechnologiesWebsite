using ContactFormProcessor.Models;

namespace ContactFormProcessor.Templates;

/// <summary>
/// Produces branded HTML email bodies for both customer confirmations
/// and internal business notifications.
/// All styles are inline - required for broad email client compatibility.
/// </summary>
public static class EmailTemplates
{
    private const string BrandYellow  = "#f0da11";
    private const string BrandDark    = "#1e293b";
    private const string BrandMid     = "#334155";
    private const string TextDark     = "#1f2937";
    private const string TextGray     = "#6b7280";
    private const string BorderColor  = "#e5e7eb";
    private const string WhiteBg      = "#ffffff";
    private const string LightBg      = "#f9fafb";
    private const string SiteUrl      = "https://www.carwashtechnologies.com";
    private const string PhoneDisplay = "(612) 408-9010";
    private const string PhoneLink    = "tel:6124089010";
    private const string CompanyName  = "Carwash Technologies";
    private const string Address      = "322 19th St. SW, Forest Lake, MN 55025";

    // ── Shared helpers ───────────────────────────────────────────────────────

    private static string Wrapper(string innerContent) => $@"<!DOCTYPE html>
<html lang=""en"">
<head>
  <meta charset=""UTF-8"" />
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"" />
  <title>{CompanyName}</title>
</head>
<body style=""margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;"">
  <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0"" style=""background-color:#f3f4f6;padding:32px 16px;"">
    <tr>
      <td align=""center"">
        <table role=""presentation"" width=""100%"" style=""max-width:600px;"" cellpadding=""0"" cellspacing=""0"">
          {innerContent}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>";

    private static string Header(string subtitle) => $@"
  <!-- Header -->
  <tr>
    <td style=""background-color:{BrandDark};padding:24px 20px;border-radius:12px 12px 0 0;"">
      <a href=""{SiteUrl}"" style=""text-decoration:none;"">
        <span style=""font-size:22px;font-weight:700;color:{BrandYellow};letter-spacing:0.5px;"">{CompanyName}</span>
      </a>
      <p style=""margin:6px 0 8px;font-size:13px;color:#94a3b8;"">{subtitle}</p>
      <span style=""display:inline-block;background-color:{BrandYellow};color:{BrandDark};font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;"">MN · ND · SD · WI</span>
    </td>
  </tr>";

    private static string Footer() => $@"
  <!-- Footer -->
  <tr>
    <td style=""background-color:{BrandMid};padding:24px 20px;border-radius:0 0 12px 12px;"">
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0"">
        <tr>
          <td>
            <p style=""margin:0 0 6px;font-size:13px;color:#94a3b8;"">
              <strong style=""color:#cbd5e1;"">{CompanyName}</strong> &nbsp;|&nbsp; {Address}
            </p>
            <p style=""margin:0 0 6px;font-size:13px;color:#94a3b8;"">
              <a href=""{PhoneLink}"" style=""color:{BrandYellow};text-decoration:none;"">{PhoneDisplay}</a>
              &nbsp;|&nbsp;
              <a href=""{SiteUrl}"" style=""color:{BrandYellow};text-decoration:none;"">carwashtechnologies.com</a>
            </p>
            <p style=""margin:16px 0 0;font-size:11px;color:#64748b;line-height:1.6;"">
              This message was sent by an automated system. Please do not reply directly to this email.
              For assistance, call us at {PhoneDisplay} or visit <a href=""{SiteUrl}"" style=""color:#94a3b8;"">{SiteUrl}</a>.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>";

    private static string DetailRow(string label, string value, bool shade = false)
    {
        var bg = shade ? LightBg : WhiteBg;
        return $@"
        <tr style=""background-color:{bg};"">
          <td style=""padding:10px 16px;font-size:13px;font-weight:600;color:{TextGray};width:38%;border-bottom:1px solid {BorderColor};"">{label}</td>
          <td style=""padding:10px 16px;font-size:13px;color:{TextDark};border-bottom:1px solid {BorderColor};"">{System.Net.WebUtility.HtmlEncode(value)}</td>
        </tr>";
    }

    private static string UrgencyBadge(string urgency) => urgency?.ToLower() switch
    {
        "urgent" => $@"<span style=""display:inline-block;background-color:#dc2626;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;"">URGENT - High Priority</span>",
        "soon"   => $@"<span style=""display:inline-block;background-color:#d97706;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;"">SOON - Elevated Priority</span>",
        _        => $@"<span style=""display:inline-block;background-color:#16a34a;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;"">Normal Priority</span>",
    };

    private static string ContactTypeBadge(string contactType) => $@"
      <span style=""display:inline-block;background-color:{BrandYellow};color:{BrandDark};font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;"">{System.Net.WebUtility.HtmlEncode(FormatContactType(contactType))}</span>";

    private static string FormatContactType(string contactType) => contactType?.ToLower() switch
    {
        "chemicals"           => "Chemical Sales",
        "service"             => "Service & Maintenance",
        "sales"               => "Equipment Sales",
        _                     => contactType ?? "General"
    };

    private static string FormatBestTime(string bestTime) => bestTime?.ToLower() switch
    {
        "morning"   => "Morning (8AM – 12PM)",
        "afternoon" => "Afternoon (12PM – 5PM)",
        "evening"   => "Evening (5PM – 8PM)",
        "anytime"   => "Anytime",
        _           => bestTime ?? "-"
    };

    private static string FormatArea(string area) => area?.ToLower() switch
    {
        "chemicals"    => "Chemicals",
        "maintenance"  => "Service & Maintenance",
        "equipment"    => "Equipment Sales",
        "installation" => "Installation & Setup",
        "parts"        => "Parts",
        "consulting"   => "Consulting & Planning",
        "new-build"    => "New Carwash Build",
        "other"        => "Other",
        _              => area ?? string.Empty
    };

    private static string FormatAreasOfInterest(List<string>? areas) =>
        areas is null || areas.Count == 0
            ? string.Empty
            : string.Join(", ", areas.Select(FormatArea).Where(a => !string.IsNullOrWhiteSpace(a)));

    private static string FormatCareerArea(string area) => area?.ToLower() switch
    {
        "service-tech"     => "Service Technician",
        "installation"     => "Installation Crew",
        "chemicals"        => "Chemical Delivery / Sales",
        "equipment-sales"  => "Equipment Sales",
        "admin"            => "Office / Admin",
        "other"            => "Other",
        _                  => area ?? string.Empty
    };

    private static string FormatCareerAreas(List<string>? areas) =>
        areas is null || areas.Count == 0
            ? string.Empty
            : string.Join(", ", areas.Select(FormatCareerArea).Where(a => !string.IsNullOrWhiteSpace(a)));

    // ── Customer Confirmation ────────────────────────────────────────────────

    /// <summary>Confirmation email sent to the person who submitted the form.</summary>
    public static string CustomerConfirmation(ContactFormData form)
    {
        var name = System.Net.WebUtility.HtmlEncode(form.Name);
        var rows = string.Concat(
            DetailRow("Inquiry Type",      FormatContactType(form.ContactType), false),
            DetailRow("Name",              form.Name,                           true),
            DetailRow("Email",             form.Email,                          false),
            string.IsNullOrWhiteSpace(form.Phone)   ? "" : DetailRow("Phone",   form.Phone,   true),
            string.IsNullOrWhiteSpace(form.Company) ? "" : DetailRow("Company", form.Company, false),
            DetailRow("Best Time to Call", FormatBestTime(form.BestTime),       true),
            string.IsNullOrWhiteSpace(FormatAreasOfInterest(form.AreasOfInterest))
                ? "" : DetailRow("Areas of Interest", FormatAreasOfInterest(form.AreasOfInterest), false),
            DetailRow("Your Message",      form.Inquiry,                        true)
        );

        var body = $@"
  {Header("Contact Confirmation")}

  <!-- Hero band -->
  <tr>
    <td style=""background-color:{BrandYellow};padding:20px 20px;"">
      <p style=""margin:0;font-size:24px;font-weight:700;color:{BrandDark};"">Thank you, {name}!</p>
      <p style=""margin:8px 0 0;font-size:15px;color:{BrandDark};"">We've received your inquiry and our team will follow up.</p>
    </td>
  </tr>

  <!-- Body card -->
  <tr>
    <td style=""background-color:{WhiteBg};padding:24px 20px;"">
      <p style=""margin:0 0 8px;font-size:15px;color:{TextDark};line-height:1.6;"">
        Hi <strong>{name}</strong>,
      </p>
      <p style=""margin:0 0 24px;font-size:15px;color:{TextDark};line-height:1.6;"">
        Thank you for reaching out to <strong>{CompanyName}</strong>. One of our specialists will
        follow up with you during normal business hours
        (Mon–Fri, 8AM–5PM CST).
      </p>
      <p style=""margin:0 0 16px;font-size:14px;font-weight:600;color:{TextDark};text-transform:uppercase;letter-spacing:0.5px;"">Your Submission Summary</p>

      <!-- Details table -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border:1px solid {BorderColor};border-radius:8px;overflow:hidden;margin-bottom:28px;"">
        {rows}
      </table>

      <!-- Need faster help box -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""background-color:{LightBg};border:1px solid {BorderColor};border-radius:8px;margin-bottom:28px;"">
        <tr>
          <td style=""padding:20px 24px;"">
            <p style=""margin:0 0 6px;font-size:14px;font-weight:700;color:{TextDark};"">Need immediate assistance?</p>
            <p style=""margin:0;font-size:14px;color:{TextGray};line-height:1.6;"">
              Call us directly at
              <a href=""{PhoneLink}"" style=""color:{BrandDark};font-weight:700;text-decoration:none;"">{PhoneDisplay}</a>
              or visit
              <a href=""{SiteUrl}"" style=""color:{BrandDark};font-weight:700;text-decoration:none;"">carwashtechnologies.com</a>.
            </p>
          </td>
        </tr>
      </table>

      <!-- Disclaimer -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border-left:4px solid {BrandYellow};background-color:#fffde7;border-radius:0 8px 8px 0;margin-bottom:8px;"">
        <tr>
          <td style=""padding:16px 20px;"">
            <p style=""margin:0 0 4px;font-size:12px;font-weight:700;color:{TextDark};"">Important Notice</p>
            <p style=""margin:0;font-size:11px;color:{TextGray};line-height:1.7;"">
              This email is an automated confirmation of your form submission only. It does
              <strong>not</strong> constitute a sales contract, binding agreement, commitment to
              provide services, or acceptance of any order. No contractual obligation is created
              until a written agreement is executed by an authorized representative of
              {CompanyName}. All pricing, availability, and service details are subject to
              change. If you did not submit this inquiry, please disregard this email or
              contact us at {PhoneDisplay}.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  {Footer()}";

        return Wrapper(body);
    }

    // ── Business Notification ────────────────────────────────────────────────

    /// <summary>Internal notification email sent to the relevant business team mailbox.</summary>
    public static string BusinessNotification(ContactFormData form)
    {
        var rows = string.Concat(
            DetailRow("Name",              form.Name,                           false),
            DetailRow("Email",             form.Email,                          true),
            string.IsNullOrWhiteSpace(form.Phone)   ? "" : DetailRow("Phone",   form.Phone,   false),
            string.IsNullOrWhiteSpace(form.Company) ? "" : DetailRow("Company", form.Company, true),
            DetailRow("Inquiry Type",      FormatContactType(form.ContactType), false),
            DetailRow("Best Time to Call", FormatBestTime(form.BestTime),       true),
            DetailRow("Urgency",           form.Urgency ?? "normal",            false),
            string.IsNullOrWhiteSpace(FormatAreasOfInterest(form.AreasOfInterest))
                ? "" : DetailRow("Areas of Interest", FormatAreasOfInterest(form.AreasOfInterest), true),
            DetailRow("Message",           form.Inquiry,                        false)
        );

        var urgencyBadge    = UrgencyBadge(form.Urgency ?? "normal");
        var contactTypeBadge = ContactTypeBadge(form.ContactType);
        var submittedAt     = System.Net.WebUtility.HtmlEncode(
                                  DateTime.UtcNow.ToString("dddd, MMMM d, yyyy 'at' h:mm tt 'UTC'"));

        var body = $@"
  {Header("Internal - New Inquiry Notification")}

  <!-- Alert band -->
  <tr>
    <td style=""background-color:{BrandDark};border-top:4px solid {BrandYellow};padding:20px 20px;"">
      <p style=""margin:0 0 8px;font-size:18px;font-weight:700;color:#f1f5f9;"">New Inquiry Received</p>
      <p style=""margin:0 0 10px;font-size:13px;color:#94a3b8;"">Submitted: {submittedAt}</p>
      {contactTypeBadge}
    </td>
  </tr>

  <!-- Urgency callout -->
  <tr>
    <td style=""background-color:{BrandMid};padding:12px 20px;"">
      <p style=""margin:0 0 6px;font-size:13px;color:#94a3b8;"">Response priority:</p>
      {urgencyBadge}
    </td>
  </tr>

  <!-- Body card -->
  <tr>
    <td style=""background-color:{WhiteBg};padding:24px 20px;"">

      <!-- Submitter details table -->
      <p style=""margin:0 0 16px;font-size:14px;font-weight:600;color:{TextDark};text-transform:uppercase;letter-spacing:0.5px;"">Submission Details</p>
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border:1px solid {BorderColor};border-radius:8px;overflow:hidden;margin-bottom:28px;"">
        {rows}
      </table>

      <!-- Quick reply CTA -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""background-color:{LightBg};border:1px solid {BorderColor};border-radius:8px;margin-bottom:28px;"">
        <tr>
          <td style=""padding:20px 24px;"">
            <p style=""margin:0 0 6px;font-size:14px;font-weight:700;color:{TextDark};"">Reply to this customer</p>
            <p style=""margin:0 0 12px;font-size:13px;color:{TextGray};line-height:1.6;"">
              Email: <a href=""mailto:{System.Net.WebUtility.HtmlEncode(form.Email)}"" style=""color:{BrandDark};font-weight:600;text-decoration:none;"">{System.Net.WebUtility.HtmlEncode(form.Email)}</a>
              {(string.IsNullOrWhiteSpace(form.Phone) ? "" : $@"&nbsp;&nbsp;|&nbsp;&nbsp; Phone: <a href=""tel:{System.Net.WebUtility.HtmlEncode(form.Phone)}"" style=""color:{BrandDark};font-weight:600;text-decoration:none;"">{System.Net.WebUtility.HtmlEncode(form.Phone)}</a>")}
            </p>
          </td>
        </tr>
      </table>

      <!-- Disclaimer -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border-left:4px solid {BrandYellow};background-color:#fffde7;border-radius:0 8px 8px 0;"">
        <tr>
          <td style=""padding:16px 20px;"">
            <p style=""margin:0 0 4px;font-size:12px;font-weight:700;color:{TextDark};"">Internal Use Only - Automated Notification</p>
            <p style=""margin:0;font-size:11px;color:{TextGray};line-height:1.7;"">
              This notification was generated automatically when a visitor submitted the contact
              form on the {CompanyName} website. It is intended solely for internal business use.
              This message does <strong>not</strong> constitute a sales contract, binding
              commitment, or acceptance of any order. Follow up with the customer according to
              standard business procedures. Do not forward this email outside of the organization
              as it contains personally identifiable information (PII) subject to our privacy policy.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  {Footer()}";

        return Wrapper(body);
    }

    // ── Careers Applicant Confirmation ───────────────────────────────────────

    /// <summary>Confirmation email sent to the applicant who submitted the careers form.</summary>
    public static string CareersConfirmation(CareersFormData app)
    {
        var name = System.Net.WebUtility.HtmlEncode(app.Name);

        var rows = string.Concat(
            string.IsNullOrWhiteSpace(app.Position) ? "" : DetailRow("Position", app.Position!, false),
            string.IsNullOrWhiteSpace(FormatCareerAreas(app.AreasOfInterest))
                ? "" : DetailRow("Areas of Interest", FormatCareerAreas(app.AreasOfInterest), true),
            DetailRow("Resume",
                string.IsNullOrWhiteSpace(app.ResumeFileName) ? "Not attached" : app.ResumeFileName!, false)
        );

        var body = $@"
  {Header("Application Confirmation")}

  <!-- Hero band -->
  <tr>
    <td style=""background-color:{BrandYellow};padding:20px 20px;"">
      <p style=""margin:0;font-size:24px;font-weight:700;color:{BrandDark};"">Thank you, {name}!</p>
      <p style=""margin:8px 0 0;font-size:15px;color:{BrandDark};"">We've received your application and our team will review it.</p>
    </td>
  </tr>

  <!-- Body card -->
  <tr>
    <td style=""background-color:{WhiteBg};padding:24px 20px;"">
      <p style=""margin:0 0 8px;font-size:15px;color:{TextDark};line-height:1.6;"">Hi <strong>{name}</strong>,</p>
      <p style=""margin:0 0 24px;font-size:15px;color:{TextDark};line-height:1.6;"">
        Thank you for your interest in joining <strong>{CompanyName}</strong>. We've received your
        application and our team will review it. If your background is a fit, we'll reach out to talk
        about next steps.
      </p>
      <p style=""margin:0 0 16px;font-size:14px;font-weight:600;color:{TextDark};text-transform:uppercase;letter-spacing:0.5px;"">Your Application Summary</p>
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border:1px solid {BorderColor};border-radius:8px;overflow:hidden;margin-bottom:28px;"">
        {rows}
      </table>

      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""background-color:{LightBg};border:1px solid {BorderColor};border-radius:8px;margin-bottom:8px;"">
        <tr>
          <td style=""padding:20px 24px;"">
            <p style=""margin:0 0 6px;font-size:14px;font-weight:700;color:{TextDark};"">Questions?</p>
            <p style=""margin:0;font-size:14px;color:{TextGray};line-height:1.6;"">
              Call us at <a href=""{PhoneLink}"" style=""color:{BrandDark};font-weight:700;text-decoration:none;"">{PhoneDisplay}</a>.
            </p>
          </td>
        </tr>
      </table>

      <p style=""margin:16px 0 0;font-size:11px;color:{TextGray};line-height:1.7;"">
        {CompanyName} is an equal opportunity employer. This is an automated confirmation of your
        application submission and is not an offer of employment.
      </p>
    </td>
  </tr>

  {Footer()}";

        return Wrapper(body);
    }

    // ── Careers Notification ─────────────────────────────────────────────────

    /// <summary>Internal notification email for a job application submitted via the careers form.</summary>
    public static string CareersNotification(CareersFormData app)
    {
        var resumeStatus = string.IsNullOrWhiteSpace(app.ResumeFileName)
            ? "No resume attached (none uploaded)"
            : $"Attached: {app.ResumeFileName}";

        var rows = string.Concat(
            DetailRow("Name",                app.Name,                                false),
            DetailRow("Email",               app.Email,                               true),
            string.IsNullOrWhiteSpace(app.Phone)    ? "" : DetailRow("Phone",    app.Phone!,    false),
            string.IsNullOrWhiteSpace(app.Position) ? "" : DetailRow("Position", app.Position!, true),
            string.IsNullOrWhiteSpace(FormatCareerAreas(app.AreasOfInterest))
                ? "" : DetailRow("Areas of Interest", FormatCareerAreas(app.AreasOfInterest), false),
            DetailRow("Valid Driver's License", app.HasLicense ? "Yes" : "Not confirmed", true),
            DetailRow("At-Will / EEO Acknowledged", app.Acknowledged ? "Yes" : "No", false),
            DetailRow("Resume",              resumeStatus,                            true),
            string.IsNullOrWhiteSpace(app.Message) ? "" : DetailRow("About Applicant", app.Message!, false)
        );

        var submittedAt = System.Net.WebUtility.HtmlEncode(
            DateTime.UtcNow.ToString("dddd, MMMM d, yyyy 'at' h:mm tt 'UTC'"));

        var body = $@"
  {Header("Internal - New Job Application")}

  <!-- Alert band -->
  <tr>
    <td style=""background-color:{BrandDark};border-top:4px solid {BrandYellow};padding:20px 20px;"">
      <p style=""margin:0 0 8px;font-size:18px;font-weight:700;color:#f1f5f9;"">New Job Application Received</p>
      <p style=""margin:0;font-size:13px;color:#94a3b8;"">Submitted: {submittedAt}</p>
    </td>
  </tr>

  <!-- Body card -->
  <tr>
    <td style=""background-color:{WhiteBg};padding:24px 20px;"">
      <p style=""margin:0 0 16px;font-size:14px;font-weight:600;color:{TextDark};text-transform:uppercase;letter-spacing:0.5px;"">Applicant Details</p>
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border:1px solid {BorderColor};border-radius:8px;overflow:hidden;margin-bottom:28px;"">
        {rows}
      </table>

      <!-- Quick reply CTA -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""background-color:{LightBg};border:1px solid {BorderColor};border-radius:8px;margin-bottom:28px;"">
        <tr>
          <td style=""padding:20px 24px;"">
            <p style=""margin:0 0 6px;font-size:14px;font-weight:700;color:{TextDark};"">Reply to this applicant</p>
            <p style=""margin:0;font-size:13px;color:{TextGray};line-height:1.6;"">
              Email: <a href=""mailto:{System.Net.WebUtility.HtmlEncode(app.Email)}"" style=""color:{BrandDark};font-weight:600;text-decoration:none;"">{System.Net.WebUtility.HtmlEncode(app.Email)}</a>
              {(string.IsNullOrWhiteSpace(app.Phone) ? "" : $@"&nbsp;&nbsp;|&nbsp;&nbsp; Phone: <a href=""tel:{System.Net.WebUtility.HtmlEncode(app.Phone)}"" style=""color:{BrandDark};font-weight:600;text-decoration:none;"">{System.Net.WebUtility.HtmlEncode(app.Phone)}</a>")}
            </p>
          </td>
        </tr>
      </table>

      <!-- Disclaimer -->
      <table role=""presentation"" width=""100%"" cellpadding=""0"" cellspacing=""0""
             style=""border-left:4px solid {BrandYellow};background-color:#fffde7;border-radius:0 8px 8px 0;"">
        <tr>
          <td style=""padding:16px 20px;"">
            <p style=""margin:0 0 4px;font-size:12px;font-weight:700;color:{TextDark};"">Internal Use Only - Automated Notification</p>
            <p style=""margin:0;font-size:11px;color:{TextGray};line-height:1.7;"">
              This notification was generated automatically when an applicant submitted the careers
              form on the {CompanyName} website. It contains personally identifiable information (PII)
              subject to our privacy policy - do not forward outside the organization. {CompanyName}
              is an equal opportunity employer.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  {Footer()}";

        return Wrapper(body);
    }
}
