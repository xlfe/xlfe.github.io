---
layout: post
category : blog
title: Private Health Insurance Outcomes (Part 3)
tags:
- health-insurance
- data
---

This is the final post in a series on private health insurance data; [Part 0]({% post_url  2013-09-23-private-health-insurance %})
(23 Sept. 2013), [Part 1]({% post_url 2013-11-21-private-health-insurance-opacity %}) (21 Nov. 2013) and [Part 2]
({% post_url 2014-02-24-private-health-insurance-obfuscation %}) (24 Feb. 2014).

### FOI outcomes

Following the Private Health Insurance Ombudsman's (PHIO) attempt to [limit]
({% post_url 2014-02-24-private-health-insurance-obfuscation %}) the use of the data publicly available on their
website, I lodged an appeal with the Australian Office of the Information Commissioner.

I received their [response](/assets/FOI-PHIO-Docs/FOI-OAIC-Response.pdf) a few days ago - they advised that they had
decided not to conduct a review of the PHIO's [FOI decision](/assets/FOI-PHIO-Docs/Response to FOI 2013-1.pdf) because
they considered the PHIO's argument that the insurers who did not consent to having their policies detailed in a
spreadsheet were indeed exempt from the FOI request under the secrecy provision of the FOI legislation.

I find it bizarre that the PHIO can publish information in a pseudo print (PDF) format on their website and, at the same
time, claim that the __same information__
in a flat (spreadsheet) aggregate format is *[protected information](http://www.comlaw.gov.au/Series/C2007A00031)*.

The result is that the data available for download below does not include any policies from AHM, HCF, Health Partners,
Medibank, Doctors' Health, RT Health, CBHS or the Navy health fund (8,987 policies).

### The data

The FOI response from the PHIO contained 30,006 XML files.
Here's what [one of them](https://gist.github.com/xlfe/11033145) looks like:

{% highlight xml %}
<?xml version="1.0"?>
<Product xmlns="http://admin.privatehealth.gov.au/ws/Schemas" ProductID="cbccc173-486f-413d-b01f-2aa14e17da34" FundID="669a2e89-165a-4419-b1a8-f1e01db76178" ProductCode="J20/N0500S" Iteration="9" Status="Approved" StatusDate="2014-02-13T11:19:00" DateModified="2014-02-04T12:06:00" DateCreated="2014-02-04T12:06:00" PublishDate="01-Apr-14 00:00" DateApproved="2014-02-13T11:19:44">
  <FundCode>NIB</FundCode>
  <TableCode>J20</TableCode>
  <Name>Basic Saver $250 Excess</Name>
  <ProductStatus>Open</ProductStatus>
  <DateValidFrom>2014-04-01</DateValidFrom>
  <DateIssued>2014-04-01</DateIssued>
  <State>NSW</State>
  <Category>Single</Category>
  <ProductType>Combined</ProductType>
  <MedicareLevySurchargeExempt>true</MedicareLevySurchargeExempt>
  <PremiumNoRebate>106.60</PremiumNoRebate>
  <Premium>106.60</Premium>
  <PremiumHospitalComponent>46.79</PremiumHospitalComponent>
  <HospitalCover GapCoverProvided="true">
    <ClassificationHospital>Budget</ClassificationHospital>
    <Accommodation>PrivateOrPublic</Accommodation>
    <HospitalAmbulance>Full</HospitalAmbulance>
    <MedicalServices OtherExclusions="true" OtherRestrictions="true" OtherBLP="false">
      <MedicalService Title="Cardiac" Cover="Restricted" Partial="false"/>
      <MedicalService Title="CataractEyeLens" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="Obstetric" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="AssistedReproductive" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="JointReplacementAll" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="RenalDialysis" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="Podiatric" Cover="Restricted" Partial="true"/>
      <MedicalService Title="GastricBanding" Cover="NotCovered" Partial="false"/>
      <MedicalService Title="Sterilisation" Cover="Restricted" Partial="false"/>
      <MedicalService Title="PlasticNonCosmetic" Cover="Restricted" Partial="false"/>
      <MedicalService Title="Rehabilitation" Cover="Restricted" Partial="false"/>
      <MedicalService Title="Psychiatric" Cover="Restricted" Partial="false"/>
      <MedicalService Title="Palliative" Cover="Restricted" Partial="false"/>
      <MedicalService Title="NonMedicare" Cover="NotCovered" Partial="false"/>
    </MedicalServices>
    <WaitingPeriods>
      <WaitingPeriod Title="SubAcute" Unit="Month">2</WaitingPeriod>
      <WaitingPeriod Title="PreExisting" Unit="Month">12</WaitingPeriod>
      <WaitingPeriod Title="Other" Unit="Month">2</WaitingPeriod>
      <WaitingPeriod Title="Ambulance" Unit="Day">1</WaitingPeriod>
    </WaitingPeriods>
    <Excesses ExcessType="LimitedPerYear">
      <ExcessPerAdmission>250</ExcessPerAdmission>
      <ExcessPerPolicy>500</ExcessPerPolicy>
    </Excesses>
    <CoPayments CoPaymentType="None"/>
    <OtherProductFeatures>Basic Saver only provides private hospital cover for: Accidents, removal of teeth (including wisdom teeth), minor knee, hip &amp; shoulder investigations, removal of tonsils, removal of appendix, minor hernia surgery. Full details are provided on nib.com.au or call our customer care on 13 14 63</OtherProductFeatures>
  </HospitalCover>
  <GeneralHealthCover>
    <ClassificationGeneralHealth>Budget</ClassificationGeneralHealth>
    <PreferredProviderServices>
      <List>
        <Service>Dental</Service>
        <Service>Optical</Service>
      </List>
    </PreferredProviderServices>
    <GeneralHealthServices>
      <GeneralHealthService Title="DentalGeneral" Covered="1" HasSpecialFeatures="1">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>DentalGeneral</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="DentalGeneral012PeriodicExam" Type="Percent">50</Benefit>
          <Benefit Item="DentalGeneral114ScaleClean" Type="Percent">50</Benefit>
          <Benefit Item="DentalGeneral121Fluoride" Type="Percent">50</Benefit>
          <Benefit Item="DentalGeneral322Extraction" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="DentalMajor" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Endodontic" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Orthodontic" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Optical" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>6</WaitingPeriod>
        <BenefitLimitsGroup>Optical</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="OpticalSingleVisionLenses" Type="Percent">50</Benefit>
          <Benefit Item="OpticalMultiFocalLenses" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService xmlns="http://admin.privatehealth.gov.au/ws/Schemas" Title="NonPBS" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Physiotherapy" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>Physiotherapy</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="PhysiotherapyInitial" Type="Percent">50</Benefit>
          <Benefit Item="PhysiotherapySubsequent" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="Chiropractic" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>Physiotherapy</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="ChiropracticInitial" Type="Percent">50</Benefit>
          <Benefit Item="ChiropracticSubsequent" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="Podiatry" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Psychology" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="Acupuncture" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>Acupuncture</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="AcupunctureInitial" Type="Percent">50</Benefit>
          <Benefit Item="AcupunctureSubsequent" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="Naturopathy" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>Acupuncture</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="NaturopathyInitial" Type="Percent">50</Benefit>
          <Benefit Item="NaturopathySubsequent" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="Massage" Covered="1" HasSpecialFeatures="0">
        <WaitingPeriod>2</WaitingPeriod>
        <BenefitLimitsGroup>Acupuncture</BenefitLimitsGroup>
        <BenefitsList>
          <Benefit Item="MassageRemedialInitial" Type="Percent">50</Benefit>
          <Benefit Item="MassageSubsequent" Type="Percent">50</Benefit>
        </BenefitsList>
      </GeneralHealthService>
      <GeneralHealthService Title="HearingAids" Covered="0" HasSpecialFeatures="0"/>
      <GeneralHealthService Title="GlucoseMonitor" Covered="0" HasSpecialFeatures="0"/>
    </GeneralHealthServices>
    <BenefitLimits>
      <BenefitLimit Title="DentalGeneral" NoLimitOnPreventativeDental="false">
        <ServicesCombined IncludesOtherUnlisted="false">
          <Service SubLimitsApply="false">DentalGeneral</Service>
        </ServicesCombined>
        <LimitPerPerson>450</LimitPerPerson>
      </BenefitLimit>
      <BenefitLimit Title="DentalMajor">
        <ServicesCombined>
          <Service>DentalMajor</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Endodontic">
        <ServicesCombined>
          <Service>Endodontic</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Orthodontic">
        <ServicesCombined>
          <Service>Orthodontic</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Optical" NoLimitOnPreventativeDental="false">
        <ServicesCombined IncludesOtherUnlisted="false">
          <Service SubLimitsApply="false">Optical</Service>
        </ServicesCombined>
        <LimitPerPerson>200</LimitPerPerson>
      </BenefitLimit>
      <BenefitLimit Title="NonPBS">
        <ServicesCombined>
          <Service>NonPBS</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Physiotherapy" NoLimitOnPreventativeDental="false">
        <ServicesCombined IncludesOtherUnlisted="true">
          <Service SubLimitsApply="false">Physiotherapy</Service>
          <Service SubLimitsApply="false">Chiropractic</Service>
        </ServicesCombined>
        <LimitPerPerson>200</LimitPerPerson>
      </BenefitLimit>
      <BenefitLimit Title="Podiatry">
        <ServicesCombined>
          <Service>Podiatry</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Psychology">
        <ServicesCombined>
          <Service>Psychology</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Acupuncture" NoLimitOnPreventativeDental="false">
        <ServicesCombined IncludesOtherUnlisted="true">
          <Service SubLimitsApply="false">Acupuncture</Service>
          <Service SubLimitsApply="false">Naturopathy</Service>
          <Service SubLimitsApply="false">Massage</Service>
        </ServicesCombined>
        <LimitPerPerson>100</LimitPerPerson>
      </BenefitLimit>
      <BenefitLimit Title="HearingAids">
        <ServicesCombined>
          <Service>HearingAids</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="GlucoseMonitor">
        <ServicesCombined>
          <Service>GlucoseMonitor</Service>
        </ServicesCombined>
      </BenefitLimit>
      <BenefitLimit Title="Ambulance">
        <ServicesCombined>
          <Service>Ambulance</Service>
        </ServicesCombined>
      </BenefitLimit>
    </BenefitLimits>
    <GeneralHealthAmbulance Cover="ReferHosp"/>
    <OtherProductFeatures>Take advantage of other product features such as up to a 4% discount for payment by direct debit from a cheque or savings account. Go to nib online services where you can make claims for selected Extras services and access health and wellbeing tips.</OtherProductFeatures>
    <SpecialFeatures>Surgical tooth extraction and Oral Surgery has a 12 month waiting period.</SpecialFeatures>
  </GeneralHealthCover>
</Product>
{% endhighlight %}

Not exactly easy to follow, or perform any sort of comparative analysis. What would be really great would be a
flattened format - so that all of the plans could fit in one spreadsheet.

Well, with [some (actually alot) of python magic](https://gist.github.com/xlfe/fe28ad7782432623f810),
 I was able to convert the XML files to a [flat](https://gist.github.com/xlfe/e3a051d729b69e36a45c)
format:

{% highlight text %}
FundID
669a2e89-165a-4419-b1a8-f1e01db76178

ProductCode
J20/N0500S

ProductID
cbccc173-486f-413d-b01f-2aa14e17da34

Iteration
9

Status
Approved

StatusDate
2014-02-13T11:19:00

DateModified
2014-02-04T12:06:00

DateCreated
2014-02-04T12:06:00

PublishDate
1/04/2014 0:00

DateApproved
2014-02-13T11:19:44

FundCode
NIB

TableCode
J20

Name
Basic Saver $250 Excess

ProductStatus
Open

DateValidFrom
1/04/2014

DateIssued
1/04/2014

State
NSW

Category
Single

ProductType
Combined

MedicareLevySurchargeExempt
TRUE

PremiumNoRebate
106.6

Premium
106.6

PremiumHospitalComponent
46.79

Hospital.GapCoverProvided
TRUE

General.Service.Acupuncture.Acupuncture.AcupunctureInitial
50%

General.Service.Acupuncture.Acupuncture.AcupunctureSubsequent
50%

General.Service.Acupuncture.Acupuncture.SpecialFeatures
0

General.Service.Acupuncture.Acupuncture.WaitingPeriod
2 months

General.Service.Acupuncture.Limit.LimitPerPerson
$100

General.Service.Acupuncture.Limit.OtherUnlisted
TRUE

General.Service.Acupuncture.Massage.MassageRemedialInitial
50%

General.Service.Acupuncture.Massage.MassageSubsequent
50%

General.Service.Acupuncture.Massage.SpecialFeatures
0

General.Service.Acupuncture.Massage.WaitingPeriod
2 months

General.Service.Acupuncture.Naturopathy.NaturopathyInitial
50%

General.Service.Acupuncture.Naturopathy.NaturopathySubsequent
50%

General.Service.Acupuncture.Naturopathy.SpecialFeatures
0

General.Service.Acupuncture.Naturopathy.WaitingPeriod
2 months

General.Service.DentalGeneral.DentalGeneral.DentalGeneral012PeriodicExam
50%

General.Service.DentalGeneral.DentalGeneral.DentalGeneral114ScaleClean
50%

General.Service.DentalGeneral.DentalGeneral.DentalGeneral121Fluoride
50%

General.Service.DentalGeneral.DentalGeneral.DentalGeneral322Extraction
50%

General.Service.DentalGeneral.DentalGeneral.SpecialFeatures
1

General.Service.DentalGeneral.DentalGeneral.WaitingPeriod
2 months

General.Service.DentalGeneral.Limit.LimitPerPerson
$450

General.Service.DentalGeneral.Limit.OtherUnlisted
FALSE

General.Service.Optical.Limit.LimitPerPerson
$200

General.Service.Optical.Limit.OtherUnlisted
FALSE

General.Service.Optical.Optical.OpticalMultiFocalLenses
50%

General.Service.Optical.Optical.OpticalSingleVisionLenses
50%

General.Service.Optical.Optical.SpecialFeatures
0

General.Service.Optical.Optical.WaitingPeriod
6 months

General.Service.Physiotherapy.Chiropractic.ChiropracticInitial
50%

General.Service.Physiotherapy.Chiropractic.ChiropracticSubsequent
50%

General.Service.Physiotherapy.Chiropractic.SpecialFeatures
0

General.Service.Physiotherapy.Chiropractic.WaitingPeriod
2 months

General.Service.Physiotherapy.Limit.LimitPerPerson
$200

General.Service.Physiotherapy.Limit.OtherUnlisted
TRUE

General.Service.Physiotherapy.Physiotherapy.PhysiotherapyInitial
50%

General.Service.Physiotherapy.Physiotherapy.PhysiotherapySubsequent
50%

General.Service.Physiotherapy.Physiotherapy.SpecialFeatures
0

General.Service.Physiotherapy.Physiotherapy.WaitingPeriod
2 months

GeneralHealthCover.ClassificationGeneralHealth
Budget

GeneralHealthCover.GeneralHealthAmbulance.Cover
ReferHosp

GeneralHealthCover.OtherProductFeatures
Take advantage of other product features such as up to a 4% discount for payment by direct debit from a cheque or savings account. Go to nib online services where you can make claims for selected Extras services and access health and wellbeing tips.

GeneralHealthCover.SpecialFeatures
Surgical tooth extraction and Oral Surgery has a 12 month waiting period.

Hospital.Accommodation
PrivateOrPublic

Hospital.ClassificationHospital
Budget

Hospital.CoPayments.CoPaymentType
None

Hospital.Excesses.ExcessPerAdmission
250

Hospital.Excesses.ExcessPerPolicy
500

Hospital.Excesses.ExcessType
LimitedPerYear

Hospital.HospitalAmbulance
Full

Hospital.MedicalServices.AssistedReproductive
NotCovered

Hospital.MedicalServices.Cardiac
Restricted

Hospital.MedicalServices.CataractEyeLens
NotCovered

Hospital.MedicalServices.GastricBanding
NotCovered

Hospital.MedicalServices.JointReplacementAll
NotCovered

Hospital.MedicalServices.NonMedicare
NotCovered

Hospital.MedicalServices.Obstetric
NotCovered

Hospital.MedicalServices.OtherBLP
FALSE

Hospital.MedicalServices.OtherExclusions
TRUE

Hospital.MedicalServices.OtherRestrictions
TRUE

Hospital.MedicalServices.Palliative
Restricted

Hospital.MedicalServices.PlasticNonCosmetic
Restricted

Hospital.MedicalServices.Podiatric
Partially-Restricted

Hospital.MedicalServices.Psychiatric
Restricted

Hospital.MedicalServices.Rehabilitation
Restricted

Hospital.MedicalServices.RenalDialysis
NotCovered

Hospital.MedicalServices.Sterilisation
Restricted

Hospital.OtherProductFeatures
Basic Saver only provides private hospital cover for: Accidents  removal of teeth (including wisdom teeth)  minor knee  hip & shoulder investigations  removal of tonsils  removal of appendix  minor hernia surgery. Full details are provided on nib.com.au or call our customer care on 13 14 63

Hospital.WaitingPeriod.Ambulance
1 day

Hospital.WaitingPeriod.Other
2 month

Hospital.WaitingPeriod.PreExisting
12 month

Hospital.WaitingPeriod.SubAcute
2 month
{% endhighlight %}

This is much easier to work with. There are [more than 430 variables](https://gist.github.com/xlfe/10218340)
 - a pretty good indication of how complex the policy variations actually are:

{% highlight text %}
Hospital.GapCoverProvided
State
Category
ProductType
MedicareLevySurchargeExempt
General.Ambulance.WaitingPeriod
General.Service.Acupuncture.Acupuncture.AcupunctureInitial
General.Service.Acupuncture.Acupuncture.AcupunctureSubsequent
General.Service.Acupuncture.Acupuncture.SpecialFeatures
General.Service.Acupuncture.Acupuncture.WaitingPeriod
General.Service.Acupuncture.Limit.AnnualLimit
General.Service.Acupuncture.Limit.LimitPerPerson
General.Service.Acupuncture.Limit.LimitPerPolicy
General.Service.Acupuncture.Limit.LimitPerService
General.Service.Acupuncture.Limit.OtherUnlisted
General.Service.Acupuncture.Massage.MassageRemedialInitial
General.Service.Acupuncture.Massage.MassageSubsequent
General.Service.Acupuncture.Massage.SpecialFeatures
General.Service.Acupuncture.Massage.WaitingPeriod
General.Service.Acupuncture.Naturopathy.NaturopathyInitial
General.Service.Acupuncture.Naturopathy.NaturopathySubsequent
General.Service.Acupuncture.Naturopathy.SpecialFeatures
General.Service.Acupuncture.Naturopathy.WaitingPeriod
General.Service.Ambulance.Limit.AnnualLimit
General.Service.Ambulance.Limit.LimitPerPerson
General.Service.Ambulance.Limit.LimitPerPolicy
General.Service.Ambulance.Limit.LimitPerService
General.Service.Ambulance.Limit.OtherUnlisted
General.Service.Chiropractic.Acupuncture.AcupunctureInitial
General.Service.Chiropractic.Acupuncture.AcupunctureSubsequent
General.Service.Chiropractic.Acupuncture.SpecialFeatures
General.Service.Chiropractic.Acupuncture.WaitingPeriod
General.Service.Chiropractic.Chiropractic.ChiropracticInitial
General.Service.Chiropractic.Chiropractic.ChiropracticSubsequent
General.Service.Chiropractic.Chiropractic.SpecialFeatures
General.Service.Chiropractic.Chiropractic.WaitingPeriod
General.Service.Chiropractic.Limit.AnnualLimit
General.Service.Chiropractic.Limit.LifetimeLimit
General.Service.Chiropractic.Limit.LimitPerPerson
General.Service.Chiropractic.Limit.LimitPerPolicy
General.Service.Chiropractic.Limit.LimitPerService
General.Service.Chiropractic.Limit.OtherUnlisted
General.Service.Chiropractic.Massage.MassageRemedialInitial
General.Service.Chiropractic.Massage.MassageSubsequent
General.Service.Chiropractic.Massage.SpecialFeatures
General.Service.Chiropractic.Massage.WaitingPeriod
General.Service.Chiropractic.Naturopathy.NaturopathyInitial
General.Service.Chiropractic.Naturopathy.NaturopathySubsequent
General.Service.Chiropractic.Naturopathy.SpecialFeatures
General.Service.Chiropractic.Naturopathy.WaitingPeriod
General.Service.Chiropractic.Podiatry.PodiatryInitial
General.Service.Chiropractic.Podiatry.PodiatrySubsequent
General.Service.Chiropractic.Podiatry.SpecialFeatures
General.Service.Chiropractic.Podiatry.WaitingPeriod
General.Service.Chiropractic.Psychology.PsychologyInitial
General.Service.Chiropractic.Psychology.PsychologySubsequent
General.Service.Chiropractic.Psychology.SpecialFeatures
General.Service.Chiropractic.Psychology.WaitingPeriod
General.Service.DentalGeneral.Acupuncture.AcupunctureInitial
General.Service.DentalGeneral.Acupuncture.AcupunctureSubsequent
General.Service.DentalGeneral.Acupuncture.SpecialFeatures
General.Service.DentalGeneral.Acupuncture.WaitingPeriod
General.Service.DentalGeneral.Chiropractic.ChiropracticInitial
General.Service.DentalGeneral.Chiropractic.ChiropracticSubsequent
General.Service.DentalGeneral.Chiropractic.SpecialFeatures
General.Service.DentalGeneral.Chiropractic.WaitingPeriod
General.Service.DentalGeneral.DentalGeneral.DentalGeneral012PeriodicExam
General.Service.DentalGeneral.DentalGeneral.DentalGeneral114ScaleClean
General.Service.DentalGeneral.DentalGeneral.DentalGeneral121Fluoride
General.Service.DentalGeneral.DentalGeneral.DentalGeneral322Extraction
General.Service.DentalGeneral.DentalGeneral.SpecialFeatures
General.Service.DentalGeneral.DentalGeneral.WaitingPeriod
General.Service.DentalGeneral.DentalMajor.DentalMajor322Extraction
General.Service.DentalGeneral.DentalMajor.DentalMajor615FullCrownVeneered
General.Service.DentalGeneral.DentalMajor.SpecialFeatures
General.Service.DentalGeneral.DentalMajor.WaitingPeriod
General.Service.DentalGeneral.Endodontic.Endodontic417RootCanalTherapy
General.Service.DentalGeneral.Endodontic.SpecialFeatures
General.Service.DentalGeneral.Endodontic.WaitingPeriod
General.Service.DentalGeneral.Limit.AnnualLimit
General.Service.DentalGeneral.Limit.LimitPerPerson
General.Service.DentalGeneral.Limit.LimitPerPolicy
General.Service.DentalGeneral.Limit.LimitPerService
General.Service.DentalGeneral.Limit.Orthodontic.IndLifetimeLimit
General.Service.DentalGeneral.Limit.OtherUnlisted
General.Service.DentalGeneral.Massage.MassageRemedialInitial
General.Service.DentalGeneral.Massage.MassageSubsequent
General.Service.DentalGeneral.Massage.SpecialFeatures
General.Service.DentalGeneral.Massage.WaitingPeriod
General.Service.DentalGeneral.Naturopathy.NaturopathyInitial
General.Service.DentalGeneral.Naturopathy.NaturopathySubsequent
General.Service.DentalGeneral.Naturopathy.SpecialFeatures
General.Service.DentalGeneral.Naturopathy.WaitingPeriod
General.Service.DentalGeneral.Optical.OpticalMultiFocalLenses
General.Service.DentalGeneral.Optical.OpticalSingleVisionLenses
General.Service.DentalGeneral.Optical.SpecialFeatures
General.Service.DentalGeneral.Optical.WaitingPeriod
General.Service.DentalGeneral.Orthodontic.Orthodontic881BracesUpperLowerPlusRetainer
General.Service.DentalGeneral.Orthodontic.SpecialFeatures
General.Service.DentalGeneral.Orthodontic.WaitingPeriod
General.Service.DentalGeneral.Physiotherapy.PhysiotherapyInitial
General.Service.DentalGeneral.Physiotherapy.PhysiotherapySubsequent
General.Service.DentalGeneral.Physiotherapy.SpecialFeatures
General.Service.DentalGeneral.Physiotherapy.WaitingPeriod
General.Service.DentalGeneral.Podiatry.PodiatryInitial
General.Service.DentalGeneral.Podiatry.PodiatrySubsequent
General.Service.DentalGeneral.Podiatry.SpecialFeatures
General.Service.DentalGeneral.Podiatry.WaitingPeriod
General.Service.DentalMajor.Acupuncture.AcupunctureInitial
General.Service.DentalMajor.Acupuncture.AcupunctureSubsequent
General.Service.DentalMajor.Acupuncture.SpecialFeatures
General.Service.DentalMajor.Acupuncture.WaitingPeriod
General.Service.DentalMajor.Chiropractic.ChiropracticInitial
General.Service.DentalMajor.Chiropractic.ChiropracticSubsequent
General.Service.DentalMajor.Chiropractic.SpecialFeatures
General.Service.DentalMajor.Chiropractic.WaitingPeriod
General.Service.DentalMajor.DentalMajor.DentalMajor322Extraction
General.Service.DentalMajor.DentalMajor.DentalMajor615FullCrownVeneered
General.Service.DentalMajor.DentalMajor.SpecialFeatures
General.Service.DentalMajor.DentalMajor.WaitingPeriod
General.Service.DentalMajor.Endodontic.Endodontic417RootCanalTherapy
General.Service.DentalMajor.Endodontic.SpecialFeatures
General.Service.DentalMajor.Endodontic.WaitingPeriod
General.Service.DentalMajor.GlucoseMonitor.BloodGlucoseMonitor
General.Service.DentalMajor.GlucoseMonitor.SpecialFeatures
General.Service.DentalMajor.GlucoseMonitor.WaitingPeriod
General.Service.DentalMajor.HearingAids.HearingAid
General.Service.DentalMajor.HearingAids.SpecialFeatures
General.Service.DentalMajor.HearingAids.WaitingPeriod
General.Service.DentalMajor.Limit.AnnualLimit
General.Service.DentalMajor.Limit.LifetimeLimit
General.Service.DentalMajor.Limit.LimitPerPerson
General.Service.DentalMajor.Limit.LimitPerPolicy
General.Service.DentalMajor.Limit.LimitPerService
General.Service.DentalMajor.Limit.Orthodontic.IndLifetimeLimit
General.Service.DentalMajor.Limit.OtherUnlisted
General.Service.DentalMajor.Massage.MassageRemedialInitial
General.Service.DentalMajor.Massage.MassageSubsequent
General.Service.DentalMajor.Massage.SpecialFeatures
General.Service.DentalMajor.Massage.WaitingPeriod
General.Service.DentalMajor.Naturopathy.NaturopathyInitial
General.Service.DentalMajor.Naturopathy.NaturopathySubsequent
General.Service.DentalMajor.Naturopathy.SpecialFeatures
General.Service.DentalMajor.Naturopathy.WaitingPeriod
General.Service.DentalMajor.NonPBS.NonPBSPrescription
General.Service.DentalMajor.NonPBS.SpecialFeatures
General.Service.DentalMajor.NonPBS.WaitingPeriod
General.Service.DentalMajor.Orthodontic.Orthodontic881BracesUpperLowerPlusRetainer
General.Service.DentalMajor.Orthodontic.SpecialFeatures
General.Service.DentalMajor.Orthodontic.WaitingPeriod
General.Service.DentalMajor.Physiotherapy.PhysiotherapyInitial
General.Service.DentalMajor.Physiotherapy.PhysiotherapySubsequent
General.Service.DentalMajor.Physiotherapy.SpecialFeatures
General.Service.DentalMajor.Physiotherapy.WaitingPeriod
General.Service.DentalMajor.Podiatry.PodiatryInitial
General.Service.DentalMajor.Podiatry.PodiatrySubsequent
General.Service.DentalMajor.Podiatry.SpecialFeatures
General.Service.DentalMajor.Podiatry.WaitingPeriod
General.Service.DentalMajor.Psychology.PsychologyInitial
General.Service.DentalMajor.Psychology.PsychologySubsequent
General.Service.DentalMajor.Psychology.SpecialFeatures
General.Service.DentalMajor.Psychology.WaitingPeriod
General.Service.Endodontic.Endodontic.Endodontic417RootCanalTherapy
General.Service.Endodontic.Endodontic.SpecialFeatures
General.Service.Endodontic.Endodontic.WaitingPeriod
General.Service.Endodontic.Limit.AnnualLimit
General.Service.Endodontic.Limit.LimitPerPerson
General.Service.Endodontic.Limit.LimitPerPolicy
General.Service.Endodontic.Limit.OtherUnlisted
General.Service.GlucoseMonitor.GlucoseMonitor.BloodGlucoseMonitor
General.Service.GlucoseMonitor.GlucoseMonitor.SpecialFeatures
General.Service.GlucoseMonitor.GlucoseMonitor.WaitingPeriod
General.Service.GlucoseMonitor.Limit.AnnualLimit
General.Service.GlucoseMonitor.Limit.LimitPerPerson
General.Service.GlucoseMonitor.Limit.LimitPerPolicy
General.Service.GlucoseMonitor.Limit.LimitPerService
General.Service.GlucoseMonitor.Limit.OtherUnlisted
General.Service.HearingAids.GlucoseMonitor.BloodGlucoseMonitor
General.Service.HearingAids.GlucoseMonitor.SpecialFeatures
General.Service.HearingAids.GlucoseMonitor.WaitingPeriod
General.Service.HearingAids.HearingAids.HearingAid
General.Service.HearingAids.HearingAids.SpecialFeatures
General.Service.HearingAids.HearingAids.WaitingPeriod
General.Service.HearingAids.Limit.AnnualLimit
General.Service.HearingAids.Limit.LimitPerPerson
General.Service.HearingAids.Limit.LimitPerPolicy
General.Service.HearingAids.Limit.LimitPerService
General.Service.HearingAids.Limit.OtherUnlisted
General.Service.Massage.Limit.AnnualLimit
General.Service.Massage.Limit.LimitPerPerson
General.Service.Massage.Limit.LimitPerPolicy
General.Service.Massage.Limit.OtherUnlisted
General.Service.Massage.Massage.MassageRemedialInitial
General.Service.Massage.Massage.MassageSubsequent
General.Service.Massage.Massage.SpecialFeatures
General.Service.Massage.Massage.WaitingPeriod
General.Service.Naturopathy.Limit.LimitPerPerson
General.Service.Naturopathy.Limit.LimitPerPolicy
General.Service.Naturopathy.Limit.OtherUnlisted
General.Service.Naturopathy.Massage.MassageRemedialInitial
General.Service.Naturopathy.Massage.MassageSubsequent
General.Service.Naturopathy.Massage.SpecialFeatures
General.Service.Naturopathy.Massage.WaitingPeriod
General.Service.Naturopathy.Naturopathy.NaturopathyInitial
General.Service.Naturopathy.Naturopathy.NaturopathySubsequent
General.Service.Naturopathy.Naturopathy.SpecialFeatures
General.Service.Naturopathy.Naturopathy.WaitingPeriod
General.Service.NonPBS.Acupuncture.AcupunctureInitial
General.Service.NonPBS.Acupuncture.AcupunctureSubsequent
General.Service.NonPBS.Acupuncture.SpecialFeatures
General.Service.NonPBS.Acupuncture.WaitingPeriod
General.Service.NonPBS.Chiropractic.ChiropracticInitial
General.Service.NonPBS.Chiropractic.ChiropracticSubsequent
General.Service.NonPBS.Chiropractic.SpecialFeatures
General.Service.NonPBS.Chiropractic.WaitingPeriod
General.Service.NonPBS.GlucoseMonitor.BloodGlucoseMonitor
General.Service.NonPBS.GlucoseMonitor.SpecialFeatures
General.Service.NonPBS.GlucoseMonitor.WaitingPeriod
General.Service.NonPBS.HearingAids.HearingAid
General.Service.NonPBS.HearingAids.SpecialFeatures
General.Service.NonPBS.HearingAids.WaitingPeriod
General.Service.NonPBS.Limit.AnnualLimit
General.Service.NonPBS.Limit.LimitPerPerson
General.Service.NonPBS.Limit.LimitPerPolicy
General.Service.NonPBS.Limit.LimitPerService
General.Service.NonPBS.Limit.OtherUnlisted
General.Service.NonPBS.Massage.MassageRemedialInitial
General.Service.NonPBS.Massage.MassageSubsequent
General.Service.NonPBS.Massage.SpecialFeatures
General.Service.NonPBS.Massage.WaitingPeriod
General.Service.NonPBS.Naturopathy.NaturopathyInitial
General.Service.NonPBS.Naturopathy.NaturopathySubsequent
General.Service.NonPBS.Naturopathy.SpecialFeatures
General.Service.NonPBS.Naturopathy.WaitingPeriod
General.Service.NonPBS.NonPBS.NonPBSPrescription
General.Service.NonPBS.NonPBS.SpecialFeatures
General.Service.NonPBS.NonPBS.WaitingPeriod
General.Service.NonPBS.Physiotherapy.PhysiotherapyInitial
General.Service.NonPBS.Physiotherapy.PhysiotherapySubsequent
General.Service.NonPBS.Physiotherapy.SpecialFeatures
General.Service.NonPBS.Physiotherapy.WaitingPeriod
General.Service.NonPBS.Podiatry.PodiatryInitial
General.Service.NonPBS.Podiatry.PodiatrySubsequent
General.Service.NonPBS.Podiatry.SpecialFeatures
General.Service.NonPBS.Podiatry.WaitingPeriod
General.Service.NonPBS.Psychology.PsychologyInitial
General.Service.NonPBS.Psychology.PsychologySubsequent
General.Service.NonPBS.Psychology.SpecialFeatures
General.Service.NonPBS.Psychology.WaitingPeriod
General.Service.Optical.Acupuncture.AcupunctureInitial
General.Service.Optical.Acupuncture.AcupunctureSubsequent
General.Service.Optical.Acupuncture.SpecialFeatures
General.Service.Optical.Acupuncture.WaitingPeriod
General.Service.Optical.Chiropractic.ChiropracticInitial
General.Service.Optical.Chiropractic.ChiropracticSubsequent
General.Service.Optical.Chiropractic.SpecialFeatures
General.Service.Optical.Chiropractic.WaitingPeriod
General.Service.Optical.Limit.LimitPerPerson
General.Service.Optical.Limit.LimitPerPolicy
General.Service.Optical.Limit.LimitPerService
General.Service.Optical.Limit.OtherUnlisted
General.Service.Optical.Massage.MassageRemedialInitial
General.Service.Optical.Massage.MassageSubsequent
General.Service.Optical.Massage.SpecialFeatures
General.Service.Optical.Massage.WaitingPeriod
General.Service.Optical.Naturopathy.NaturopathyInitial
General.Service.Optical.Naturopathy.NaturopathySubsequent
General.Service.Optical.Naturopathy.SpecialFeatures
General.Service.Optical.Naturopathy.WaitingPeriod
General.Service.Optical.NonPBS.NonPBSPrescription
General.Service.Optical.NonPBS.SpecialFeatures
General.Service.Optical.NonPBS.WaitingPeriod
General.Service.Optical.Optical.OpticalMultiFocalLenses
General.Service.Optical.Optical.OpticalSingleVisionLenses
General.Service.Optical.Optical.SpecialFeatures
General.Service.Optical.Optical.WaitingPeriod
General.Service.Optical.Physiotherapy.PhysiotherapyInitial
General.Service.Optical.Physiotherapy.PhysiotherapySubsequent
General.Service.Optical.Physiotherapy.SpecialFeatures
General.Service.Optical.Physiotherapy.WaitingPeriod
General.Service.Optical.Psychology.PsychologyInitial
General.Service.Optical.Psychology.PsychologySubsequent
General.Service.Optical.Psychology.SpecialFeatures
General.Service.Optical.Psychology.WaitingPeriod
General.Service.Orthodontic.Limit.LifetimeLimit
General.Service.Orthodontic.Limit.LimitPerPerson
General.Service.Orthodontic.Limit.LimitPerPolicy
General.Service.Orthodontic.Limit.OtherUnlisted
General.Service.Orthodontic.Orthodontic.Orthodontic881BracesUpperLowerPlusRetainer
General.Service.Orthodontic.Orthodontic.SpecialFeatures
General.Service.Orthodontic.Orthodontic.WaitingPeriod
General.Service.Physiotherapy.Acupuncture.AcupunctureInitial
General.Service.Physiotherapy.Acupuncture.AcupunctureSubsequent
General.Service.Physiotherapy.Acupuncture.SpecialFeatures
General.Service.Physiotherapy.Acupuncture.WaitingPeriod
General.Service.Physiotherapy.Chiropractic.ChiropracticInitial
General.Service.Physiotherapy.Chiropractic.ChiropracticSubsequent
General.Service.Physiotherapy.Chiropractic.SpecialFeatures
General.Service.Physiotherapy.Chiropractic.WaitingPeriod
General.Service.Physiotherapy.Limit.AnnualLimit
General.Service.Physiotherapy.Limit.LimitPerPerson
General.Service.Physiotherapy.Limit.LimitPerPolicy
General.Service.Physiotherapy.Limit.LimitPerService
General.Service.Physiotherapy.Limit.OtherUnlisted
General.Service.Physiotherapy.Massage.MassageRemedialInitial
General.Service.Physiotherapy.Massage.MassageSubsequent
General.Service.Physiotherapy.Massage.SpecialFeatures
General.Service.Physiotherapy.Massage.WaitingPeriod
General.Service.Physiotherapy.Naturopathy.NaturopathyInitial
General.Service.Physiotherapy.Naturopathy.NaturopathySubsequent
General.Service.Physiotherapy.Naturopathy.SpecialFeatures
General.Service.Physiotherapy.Naturopathy.WaitingPeriod
General.Service.Physiotherapy.Physiotherapy.PhysiotherapyInitial
General.Service.Physiotherapy.Physiotherapy.PhysiotherapySubsequent
General.Service.Physiotherapy.Physiotherapy.SpecialFeatures
General.Service.Physiotherapy.Physiotherapy.WaitingPeriod
General.Service.Physiotherapy.Podiatry.PodiatryInitial
General.Service.Physiotherapy.Podiatry.PodiatrySubsequent
General.Service.Physiotherapy.Podiatry.SpecialFeatures
General.Service.Physiotherapy.Podiatry.WaitingPeriod
General.Service.Physiotherapy.Psychology.PsychologyInitial
General.Service.Physiotherapy.Psychology.PsychologySubsequent
General.Service.Physiotherapy.Psychology.SpecialFeatures
General.Service.Physiotherapy.Psychology.WaitingPeriod
General.Service.Podiatry.Acupuncture.AcupunctureInitial
General.Service.Podiatry.Acupuncture.AcupunctureSubsequent
General.Service.Podiatry.Acupuncture.SpecialFeatures
General.Service.Podiatry.Acupuncture.WaitingPeriod
General.Service.Podiatry.GlucoseMonitor.BloodGlucoseMonitor
General.Service.Podiatry.GlucoseMonitor.SpecialFeatures
General.Service.Podiatry.GlucoseMonitor.WaitingPeriod
General.Service.Podiatry.HearingAids.HearingAid
General.Service.Podiatry.HearingAids.SpecialFeatures
General.Service.Podiatry.HearingAids.WaitingPeriod
General.Service.Podiatry.Limit.LimitPerPerson
General.Service.Podiatry.Limit.LimitPerPolicy
General.Service.Podiatry.Limit.OtherUnlisted
General.Service.Podiatry.Massage.MassageRemedialInitial
General.Service.Podiatry.Massage.MassageSubsequent
General.Service.Podiatry.Massage.SpecialFeatures
General.Service.Podiatry.Massage.WaitingPeriod
General.Service.Podiatry.Naturopathy.NaturopathyInitial
General.Service.Podiatry.Naturopathy.NaturopathySubsequent
General.Service.Podiatry.Naturopathy.SpecialFeatures
General.Service.Podiatry.Naturopathy.WaitingPeriod
General.Service.Podiatry.Podiatry.PodiatryInitial
General.Service.Podiatry.Podiatry.PodiatrySubsequent
General.Service.Podiatry.Podiatry.SpecialFeatures
General.Service.Podiatry.Podiatry.WaitingPeriod
General.Service.Podiatry.Psychology.PsychologyInitial
General.Service.Podiatry.Psychology.PsychologySubsequent
General.Service.Podiatry.Psychology.SpecialFeatures
General.Service.Podiatry.Psychology.WaitingPeriod
General.Service.PreventativeDental.Limit
General.Service.Psychology.Acupuncture.AcupunctureInitial
General.Service.Psychology.Acupuncture.AcupunctureSubsequent
General.Service.Psychology.Acupuncture.SpecialFeatures
General.Service.Psychology.Acupuncture.WaitingPeriod
General.Service.Psychology.GlucoseMonitor.BloodGlucoseMonitor
General.Service.Psychology.GlucoseMonitor.SpecialFeatures
General.Service.Psychology.GlucoseMonitor.WaitingPeriod
General.Service.Psychology.HearingAids.HearingAid
General.Service.Psychology.HearingAids.SpecialFeatures
General.Service.Psychology.HearingAids.WaitingPeriod
General.Service.Psychology.Limit.AnnualLimit
General.Service.Psychology.Limit.LimitPerPerson
General.Service.Psychology.Limit.LimitPerPolicy
General.Service.Psychology.Limit.OtherUnlisted
General.Service.Psychology.Massage.MassageRemedialInitial
General.Service.Psychology.Massage.MassageSubsequent
General.Service.Psychology.Massage.SpecialFeatures
General.Service.Psychology.Massage.WaitingPeriod
General.Service.Psychology.Naturopathy.NaturopathyInitial
General.Service.Psychology.Naturopathy.NaturopathySubsequent
General.Service.Psychology.Naturopathy.SpecialFeatures
General.Service.Psychology.Naturopathy.WaitingPeriod
General.Service.Psychology.Psychology.PsychologyInitial
General.Service.Psychology.Psychology.PsychologySubsequent
General.Service.Psychology.Psychology.SpecialFeatures
General.Service.Psychology.Psychology.WaitingPeriod
GeneralHealthCover.ClassificationGeneralHealth
GeneralHealthCover.GeneralHealthAmbulance.BenefitLimitsGroup
GeneralHealthCover.GeneralHealthAmbulance.Cover
Hospital.Accommodation
Hospital.ClassificationHospital
Hospital.CoPayments.AnnualMax
Hospital.CoPayments.CoPaymentType
Hospital.CoPayments.DaySurgery
Hospital.CoPayments.Private
Hospital.CoPayments.PrivateMax
Hospital.CoPayments.Shared
Hospital.CoPayments.SharedMax
Hospital.Excesses.ExcessPerAdmission
Hospital.Excesses.ExcessPerPerson
Hospital.Excesses.ExcessPerPolicy
Hospital.Excesses.ExcessType
Hospital.Excesses.ExcessWaivers.Accidents
Hospital.Excesses.ExcessWaivers.DaySurgery
Hospital.Excesses.ExcessWaivers.Dependents
Hospital.HospitalAmbulance
Hospital.HospitalPercent
Hospital.LimitHospitalDays
Hospital.LimitedProduct
Hospital.MedicalServices.AssistedReproductive
Hospital.MedicalServices.AssistedReproductive.BenefitLimitationPeriod
Hospital.MedicalServices.Cardiac
Hospital.MedicalServices.Cardiac.BenefitLimitationPeriod
Hospital.MedicalServices.CataractEyeLens
Hospital.MedicalServices.CataractEyeLens.BenefitLimitationPeriod
Hospital.MedicalServices.GastricBanding
Hospital.MedicalServices.GastricBanding.BenefitLimitationPeriod
Hospital.MedicalServices.JointReplacementAll
Hospital.MedicalServices.JointReplacementAll.BenefitLimitationPeriod
Hospital.MedicalServices.JointReplacementHip
Hospital.MedicalServices.JointReplacementHipKnee
Hospital.MedicalServices.JointReplacementHipKnee.BenefitLimitationPeriod
Hospital.MedicalServices.NonMedicare
Hospital.MedicalServices.Obstetric
Hospital.MedicalServices.Obstetric.BenefitLimitationPeriod
Hospital.MedicalServices.OtherBLP
Hospital.MedicalServices.OtherExclusions
Hospital.MedicalServices.OtherRestrictions
Hospital.MedicalServices.Palliative
Hospital.MedicalServices.Palliative.BenefitLimitationPeriod
Hospital.MedicalServices.PlasticNonCosmetic
Hospital.MedicalServices.Podiatric
Hospital.MedicalServices.Psychiatric
Hospital.MedicalServices.Psychiatric.BenefitLimitationPeriod
Hospital.MedicalServices.Rehabilitation
Hospital.MedicalServices.Rehabilitation.BenefitLimitationPeriod
Hospital.MedicalServices.RenalDialysis
Hospital.MedicalServices.RenalDialysis.BenefitLimitationPeriod
Hospital.MedicalServices.Sterilisation
Hospital.WaitingPeriod.Ambulance
Hospital.WaitingPeriod.Obstetric
Hospital.WaitingPeriod.Other
Hospital.WaitingPeriod.PreExisting
Hospital.WaitingPeriod.SubAcute
{% endhighlight %}

If you want to have a look at the full data set, here it is:

* [Tab-delimited format](/assets/data/2014-04-01-PrivateHealthPolicies.tab.zip) (for data-mining use) 1.8MB
* [Excel format](/assets/data/2014-04-01-PrivateHealthPolicies.xls.zip) (for use in Excel only) 12MB


<script src="/assets/js/d3.min.js"></script>
<script src="/assets/js/bars.js"></script>

### Some summary stats

#### Average quarterly premium by state
<div class="chart" id="states"></div>

Note that the 'ALL' state is not an aggregate that I have generated, but rather (I presume) an indicator that
the policy is available in any state or territory.

#### Average quarterly premium by policy category
<div class="chart" id="cats"></div>

#### Average quarterly premium by fund
<div class="chart" id="funds"></div>

#### Average quarterly premium by policy type
<div class="chart" id="types"></div>

<script>

states = [
    ['ALL','250.191985'],
    ['NSW','289.121625'],
    ['NT','242.012242'],
    ['QLD','300.655532'],
    ['SA','293.811693'],
    ['TAS','282.70429'],
    ['VIC','307.371702'],
    ['WA','259.788788']
];

category = [
    ["ChildrenOnly",192.5024],
    ["Couple",319.0102255207],
    ["CoupleAnyDependants",404.4535232745],
    ["Family",321.1301174645],
    ["Single",158.4286460139],
    ["SingleAnyDependants",348.382230253],
    ["SingleParentFamily",284.6978229181]
]

funds = [
    ["ACA",311.6754054054],
    ["AHB",261.3031850117],
    ["AHM",0],
    ["AMA",0],
    ["AUF",298.3486678508],
    ["BUP",252.8595201911],
    ["CBH",0],
    ["CDH",255.6539285714],
    ["CPS",242.5085989011],
    ["CWH",296.3233163265],
    ["FAI",227.2683320032],
    ["GMF",291.8958333333],
    ["GMH",261.3685185185],
    ["HBF",286.3905493755],
    ["HCF",0],
    ["HCI",320.6349137931],
    ["HEA",294.898805175],
    ["HIF",221.3158469945],
    ["LHM",316.6],
    ["LHS",201.4381395349],
    ["MBP",0],
    ["MDH",144.5886363636],
    ["NHB",0],
    ["NIB",312.4052129121],
    ["NTF",241.970088845],
    ["OMF",200.375],
    ["PWA",284.5],
    ["QCH",286.4350318471],
    ["QTU",256.7206451613],
    ["RBH",362.5008333333],
    ["RTE",0],
    ["SLM",304.3735294118],
    ["SPE",329.3307142857],
    ["SPS",0],
    ["TFS",271.1819444444],
    ["WFD",355.7880154639]
]

types = [["Combined",373.5561289482],["GeneralHealth",129.848229765],["Hospital",265.0569016907]];


var dollars = d3.format('$0.00f');

var dollar_chart = barChart()
                    ._x(function(d) { return d[0]; })
                    ._y(function(d) { return d[1]; })
                    .y_format(dollars);

d3.select("#states").datum(states).call(dollar_chart);
d3.select("#cats").datum(category).call(dollar_chart);
d3.select("#funds").datum(funds).call(dollar_chart);
d3.select("#types").datum(types).call(dollar_chart);

</script>


Now the problem with these simple average statistics is that they don't tell you very much about the _value_ of the
policies - for example, the fact that (on average) Victoria has the most expensive policies might just be due to the
fact that Victorians have a taste for higher levels of cover.

To answer a question about the value of a policy, we need to be able to compare prices [_ceteris paribus_](http://en.wikipedia.org/wiki/Ceteris_paribus)
- that is, other things being equal. What that means in practice, is that we want to compare prices for policies while
taking into account the cover is offered by the policy.

Given there are tens of thousands of policies and more than 430 variables for each policy, however, that is not a simple
thing to do.

### Health insurance is complex

Insurance is one of the few goods that approach what (is known to economists) as a _homogeneous good_; products that
are very similar. Private Health Insurance in Australia is regulated and so if you sign up for two policies with the same
coverage you're likely to get a very similar product.

This means insurers compete on other things, like customer service, marketing and sales. Unfortunately because health insurance
 is complex, there are many products on the market with only minor variations. This can result in [analysis paralysis]
 (http://en.wikipedia.org/wiki/Analysis_paralysis) which can lead to a sub-optimal outcome (ie consumers purchasing
 health insurance that isn't suited to their needs, or a lack of competition).

The telecommunications industry in Australia adheres to a voluntary [code of conduct](http://www.commsalliance.com.au/Documents/all/codes/c628)
that, among other things, ensures that the plans that are sold to consumers are:

> communicated in a way which is clear, accurate and not misleading, to allow Consumers to make informed choices (Section 4.1.1).

In an industry with almost 40,000 options, Standard Information Statements don't do the consumer justice, and certainly
don't allow the consumer to make an [informed choice](http://en.wikipedia.org/wiki/Working_memory).

Having access to the full details of each plan from the PHIO has meant that I've been able to take all reported features of the
available health policies and try to determine those which represent good "value" for consumers.

### Estimating policy "value"

In order to try to estimate policy "value", I've constructed a data-mining model that tries to predict the policy premium
based on the policy features; I'm using an ensemble of decision trees regression model with the policy price as the dependent
variable and all of the policy features as the explanatory variables. This resulted in a _predicted price_ for each policy.

This predicted price is an estimate of the value of the policy based on its inclusions and taking into account the cost
of those inclusions across all policies in the market.

Part of the "art" of building a econometric model is selecting appropriate parameters that balance the predictive
power of the model while avoiding over-fitting.

One way to test the predictive performance of a model is to compare its predictions versus the actual values. The
following charts plot each policy's predicted values on the x-axis and its actual values on the y-axis. Policies (dots)
that appear on the 45 degree line are those where the model is 100% accurate. Those policies above and to the left of
the 45 degree line are those where the actual price is greater than the predicted price - those policies below and to
the right are those where the actual price is less than the predicted price.

This first chart shows a model with a low predictive power; the x-axis shows (roughly) 7 values - that is all of the
health insurance plans have been modelled as only having 7 distinct prices.

#### Figure 1 - Not a very good fit
<img class="post-img" src="/assets/health-regression-charts/bad-fit.jpg">

Clearly these parameters don't provide much predictive power.

#### Figure 2 - A better fit

Using a tree depth of 9 instead of 3 gives a better fit - we now see many levels of predicted prices - but the error
is still fairly high.

<img class="post-img" src="/assets/health-regression-charts/better-fit.jpg">

Note the first figure in the title (0.33) is the training test size - the RMSE is calcuated on the test set - ie
the remaining 77% of the data.

#### Figure 3 - The chosen model

<img class="post-img" src="/assets/health-regression-charts/chosen-fit.jpg">

I have highlighted some policies that might be of particular interest - those in green look to be particularly good
value (because their estimated value based on their features is above their actual price) while conversely those in red
look like they may be overpriced.

### Ranking summary

I have included two summaries of the rankings below that show **on average** which states and which funds offer
better value policies (those with a positive difference).

#### Average difference between actual and predicted policy price by state

<div class="chart" id="diff_state"></div>

You can see that now Western Australia looks to provide the best value coverage, on average, while Victoria looks to have
the most expensive coverage.

#### Rough estimate of the annual value transfer due to state variation ('000 of $)

Using [data](http://phiac.gov.au/industry/industry-statistics/data-tables-membership-and-coverage/) for the number of
persons with health insurance in each state, we can get a **very rough** "guesstimate" for the aggregate cost of state
variations in health insurance.


###### Note: I have used the figures for 'Coverage of General Treatment' for the Quarter ending Dec 2013 from the Private Health Insurance Administration Council. ACT has been mapped to 'All' in the chart above. The estimate could be improved and is not considered robust to variations in coverage and other factors.

<div class="chart" id="abs_state"></div>

#### Average difference between actual and predicted policy price by fund

Note that some of these figures that have the largest difference are likely to be a product of the bespoke nature of the
funds - that is there is a loose inverse relationship between the number of policies offered by a fund and the average
difference between its estimated policy prices and the actual prices.

<div class="chart" id="diff_funds"></div>

<script>

var state_rankings = [
    ['ALL',2.810385965],
    ['NSW',0.480204824],
    ['NT',3.368830725],
    ['QLD',-2.575793744],
    ['SA',-1.072050621],
    ['TAS',2.312525689],
    ['VIC',-4.848802459],
    ['WA',4.383563603]
]

var fund_rankings = [
    ['ACA',-10.72236663],
    ['AHB',6.340547365],
    ['AHM',0],
    ['AMA',0],
    ['AUF',-1.293553699],
    ['BUP',2.316513654],
    ['CBH',0],
    ['CDH',7.082516969],
    ['CPS',4.1493882],
    ['CWH',-2.151855774],
    ['FAI',-0.593902615],
    ['GMF',1.220791095],
    ['GMH',-1.175761048],
    ['HBF',-0.064599434],
    ['HCF',0],
    ['HCI',0.764416443],
    ['HEA',0.558324827],
    ['HIF',3.591149783],
    ['LHM',-0.741530953],
    ['LHS',3.729916352],
    ['MBP',0],
    ['MDH',22.03960819],
    ['NHB',0],
    ['NIB',-1.812455809],
    ['NTF',1.683345473],
    ['OMF',0.872203864],
    ['PWA',1.338795645],
    ['QCH',-4.308989501],
    ['QTU',30.80676636],
    ['RBH',-3.656497424],
    ['RTE',0],
    ['SLM',-3.02768554],
    ['SPE',3.47516034],
    ['SPS',9],
    ['TFS',6.264791541],
    ['WFD',-8.979853793]
]


var _dollars = d3.format('$0.02f');
dollar_chart.y_format(_dollars);
d3.select("#diff_state").datum(state_rankings).call(dollar_chart);
d3.select("#diff_funds").datum(fund_rankings).call(dollar_chart);

var state_mults = [
    ['ALL',257],
    ['NSW',4237],
    ['NT',101],
    ['QLD',2353],
    ['SA',980],
    ['TAS',263],
    ['VIC',2930],
    ['WA',1704]
];


var state_abs = []

for (var i=0; i< state_mults.length; i++) {
    var c = state_rankings[i][1] * state_mults[i][1] * 4;
    state_abs.push([state_rankings[i][0],c]);
}

var thousands = d3.format('$,.0f');

dollar_chart.y_format(thousands).y_label("'000");
d3.select('#abs_state').datum(state_abs).call(dollar_chart);

</script>

### A global ranking

Astute observers will note that while the chosen model isn't bad, there is still an average error of around $24 per
 quarter for each policies predicted vs actual values.

The parameters were chosen to give a good balance between model complexity, fit and predictive power, and rather than
using the predictions as an absolute indicator of policy value, they are intended to be used to rank subsets of relevant
policies.

For any particular subset of policies, the predicted values would give a relatively robust method for ranking policies by
the value they deliver. This would be perfect for a health insurance comparison website.

### Final words

This has been a long and interesting journey; I feel that I have learnt much about Private Health Insurance in
Australia and I hope I have shown above some of the type of analysis that would be possible using raw data.

This data is a rich and fascinating source, and with more than 10 million Australians holding private health insurance
policies I hope that there continues to be interest in using open data to improve the understanding of private health
insurance in Australia.






