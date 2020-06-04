---
---
  (function (root) {

    var keys = [
      {% for org in site.data.allDatasets %}{% for dataset in org[1].datasets %} "{{ dataset.id }}", {% endfor %}{% endfor %}
    ]
  if (typeof keys === "undefined") keys = ['Test'];
  else keys.push("Test");

  // Define the licence codes. See https://spdx.org/licenses/
  var licences = {
    "0BSD ": "BSD Zero Clause License ",
    "AAL ": "Attribution Assurance License ",
    "Abstyles ": "Abstyles License ",
    "Adobe-2006 ": "Adobe Systems Incorporated Source Code License Agreement ",
    "Adobe-Glyph ": "Adobe Glyph List License ",
    "ADSL ": "Amazon Digital Services License ",
    "AFL-1.1 ": "Academic Free License v1.1 ",
    "AFL-1.2 ": "Academic Free License v1.2 ",
    "AFL-2.0 ": "Academic Free License v2.0 ",
    "AFL-2.1 ": "Academic Free License v2.1 ",
    "AFL-3.0 ": "Academic Free License v3.0 ",
    "Afmparse ": "Afmparse License ",
    "AGPL-1.0-only ": "Affero General Public License v1.0 only ",
    "AGPL-1.0-or-later ": "Affero General Public License v1.0 or later ",
    "AGPL-3.0-only ": "GNU Affero General Public License v3.0 only ",
    "AGPL-3.0-or-later ": "GNU Affero General Public License v3.0 or later ",
    "Aladdin ": "Aladdin Free Public License ",
    "AMDPLPA ": "AMD's plpa_map.c License ",
    "AML ": "Apple MIT License ",
    "AMPAS ": "Academy of Motion Picture Arts and Sciences BSD ",
    "ANTLR-PD ": "ANTLR Software Rights Notice ",
    "Apache-1.0 ": "Apache License 1.0 ",
    "Apache-1.1 ": "Apache License 1.1 ",
    "Apache-2.0 ": "Apache License 2.0 ",
    "APAFML ": "Adobe Postscript AFM License ",
    "APL-1.0 ": "Adaptive Public License 1.0 ",
    "APSL-1.0 ": "Apple Public Source License 1.0 ",
    "APSL-1.1 ": "Apple Public Source License 1.1 ",
    "APSL-1.2 ": "Apple Public Source License 1.2 ",
    "APSL-2.0 ": "Apple Public Source License 2.0 ",
    "Artistic-1.0 ": "Artistic License 1.0 ",
    "Artistic-1.0-cl8 ": "Artistic License 1.0 w/clause 8 ",
    "Artistic-1.0-Perl ": "Artistic License 1.0 (Perl) ",
    "Artistic-2.0 ": "Artistic License 2.0 ",
    "Bahyph ": "Bahyph License ",
    "Barr ": "Barr License ",
    "Beerware ": "Beerware License ",
    "BitTorrent-1.0 ": "BitTorrent Open Source License v1.0 ",
    "BitTorrent-1.1 ": "BitTorrent Open Source License v1.1 ",
    "blessing ": "SQLite Blessing ",
    "BlueOak-1.0.0 ": "Blue Oak Model License 1.0.0 ",
    "Borceux ": "Borceux license ",
    "BSD-1-Clause ": "BSD 1-Clause License ",
    "BSD-2-Clause ": "BSD 2-Clause \"Simplified\" License ",
    "BSD-2-Clause-FreeBSD ": "BSD 2-Clause FreeBSD License ",
    "BSD-2-Clause-NetBSD ": "BSD 2-Clause NetBSD License ",
    "BSD-2-Clause-Patent ": "BSD-2-Clause Plus Patent License ",
    "BSD-3-Clause ": "BSD 3-Clause \"New\" or \"Revised\" License ",
    "BSD-3-Clause-Attribution ": "BSD with attribution ",
    "BSD-3-Clause-Clear ": "BSD 3-Clause Clear License ",
    "BSD-3-Clause-LBNL ": "Lawrence Berkeley National Labs BSD variant license ",
    "BSD-3-Clause-No-Nuclear-License ": "BSD 3-Clause No Nuclear License ",
    "BSD-3-Clause-No-Nuclear-License-2014 ": "BSD 3-Clause No Nuclear License 2014 ",
    "BSD-3-Clause-No-Nuclear-Warranty ": "BSD 3-Clause No Nuclear Warranty ",
    "BSD-3-Clause-Open-MPI ": "BSD 3-Clause Open MPI variant ",
    "BSD-4-Clause ": "BSD 4-Clause \"Original\" or \"Old\" License ",
    "BSD-4-Clause-UC ": "BSD-4-Clause (University of California-Specific) ",
    "BSD-Protection ": "BSD Protection License ",
    "BSD-Source-Code ": "BSD Source Code Attribution ",
    "BSL-1.0 ": "Boost Software License 1.0 ",
    "bzip2-1.0.5 ": "bzip2 and libbzip2 License v1.0.5 ",
    "bzip2-1.0.6 ": "bzip2 and libbzip2 License v1.0.6 ",
    "Caldera ": "Caldera License ",
    "CATOSL-1.1 ": "Computer Associates Trusted Open Source License 1.1 ",
    "CC-BY-1.0 ": "Creative Commons Attribution 1.0 Generic ",
    "CC-BY-2.0 ": "Creative Commons Attribution 2.0 Generic ",
    "CC-BY-2.5 ": "Creative Commons Attribution 2.5 Generic ",
    "CC-BY-3.0 ": "Creative Commons Attribution 3.0 Unported ",
    "CC-BY-4.0 ": "Creative Commons Attribution 4.0 International ",
    "CC-BY-NC-1.0 ": "Creative Commons Attribution Non Commercial 1.0 Generic ",
    "CC-BY-NC-2.0 ": "Creative Commons Attribution Non Commercial 2.0 Generic ",
    "CC-BY-NC-2.5 ": "Creative Commons Attribution Non Commercial 2.5 Generic ",
    "CC-BY-NC-3.0 ": "Creative Commons Attribution Non Commercial 3.0 Unported ",
    "CC-BY-NC-4.0 ": "Creative Commons Attribution Non Commercial 4.0 International ",
    "CC-BY-NC-ND-1.0 ": "Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic ",
    "CC-BY-NC-ND-2.0 ": "Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic ",
    "CC-BY-NC-ND-2.5 ": "Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic ",
    "CC-BY-NC-ND-3.0 ": "Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported ",
    "CC-BY-NC-ND-4.0 ": "Creative Commons Attribution Non Commercial No Derivatives 4.0 International ",
    "CC-BY-NC-SA-1.0 ": "Creative Commons Attribution Non Commercial Share Alike 1.0 Generic ",
    "CC-BY-NC-SA-2.0 ": "Creative Commons Attribution Non Commercial Share Alike 2.0 Generic ",
    "CC-BY-NC-SA-2.5 ": "Creative Commons Attribution Non Commercial Share Alike 2.5 Generic ",
    "CC-BY-NC-SA-3.0 ": "Creative Commons Attribution Non Commercial Share Alike 3.0 Unported ",
    "CC-BY-NC-SA-4.0 ": "Creative Commons Attribution Non Commercial Share Alike 4.0 International ",
    "CC-BY-ND-1.0 ": "Creative Commons Attribution No Derivatives 1.0 Generic ",
    "CC-BY-ND-2.0 ": "Creative Commons Attribution No Derivatives 2.0 Generic ",
    "CC-BY-ND-2.5 ": "Creative Commons Attribution No Derivatives 2.5 Generic ",
    "CC-BY-ND-3.0 ": "Creative Commons Attribution No Derivatives 3.0 Unported ",
    "CC-BY-ND-4.0 ": "Creative Commons Attribution No Derivatives 4.0 International ",
    "CC-BY-SA-1.0 ": "Creative Commons Attribution Share Alike 1.0 Generic ",
    "CC-BY-SA-2.0 ": "Creative Commons Attribution Share Alike 2.0 Generic ",
    "CC-BY-SA-2.5 ": "Creative Commons Attribution Share Alike 2.5 Generic ",
    "CC-BY-SA-3.0 ": "Creative Commons Attribution Share Alike 3.0 Unported ",
    "CC-BY-SA-4.0 ": "Creative Commons Attribution Share Alike 4.0 International ",
    "CC-PDDC ": "Creative Commons Public Domain Dedication and Certification ",
    "CC0-1.0 ": "Creative Commons Zero v1.0 Universal ",
    "CDDL-1.0 ": "Common Development and Distribution License 1.0 ",
    "CDDL-1.1 ": "Common Development and Distribution License 1.1 ",
    "CDLA-Permissive-1.0 ": "Community Data License Agreement Permissive 1.0 ",
    "CDLA-Sharing-1.0 ": "Community Data License Agreement Sharing 1.0 ",
    "CECILL-1.0 ": "CeCILL Free Software License Agreement v1.0 ",
    "CECILL-1.1 ": "CeCILL Free Software License Agreement v1.1 ",
    "CECILL-2.0 ": "CeCILL Free Software License Agreement v2.0 ",
    "CECILL-2.1 ": "CeCILL Free Software License Agreement v2.1 ",
    "CECILL-B ": "CeCILL-B Free Software License Agreement ",
    "CECILL-C ": "CeCILL-C Free Software License Agreement ",
    "CERN-OHL-1.1 ": "CERN Open Hardware Licence v1.1 ",
    "CERN-OHL-1.2 ": "CERN Open Hardware Licence v1.2 ",
    "ClArtistic ": "Clarified Artistic License ",
    "CNRI-Jython ": "CNRI Jython License ",
    "CNRI-Python ": "CNRI Python License ",
    "CNRI-Python-GPL-Compatible ": "CNRI Python Open Source GPL Compatible License Agreement ",
    "Condor-1.1 ": "Condor Public License v1.1 ",
    "copyleft-next-0.3.0 ": "copyleft-next 0.3.0 ",
    "copyleft-next-0.3.1 ": "copyleft-next 0.3.1 ",
    "CPAL-1.0 ": "Common Public Attribution License 1.0 ",
    "CPL-1.0 ": "Common Public License 1.0 ",
    "CPOL-1.02 ": "Code Project Open License 1.02 ",
    "Crossword ": "Crossword License ",
    "CrystalStacker ": "CrystalStacker License ",
    "CUA-OPL-1.0 ": "CUA Office Public License v1.0 ",
    "Cube ": "Cube License ",
    "curl ": "curl License ",
    "D-FSL-1.0 ": "Deutsche Freie Software Lizenz ",
    "diffmark ": "diffmark license ",
    "DOC ": "DOC License ",
    "Dotseqn ": "Dotseqn License ",
    "DSDP ": "DSDP License ",
    "dvipdfm ": "dvipdfm License ",
    "ECL-1.0 ": "Educational Community License v1.0 ",
    "ECL-2.0 ": "Educational Community License v2.0 ",
    "EFL-1.0 ": "Eiffel Forum License v1.0 ",
    "EFL-2.0 ": "Eiffel Forum License v2.0 ",
    "eGenix ": "eGenix.com Public License 1.1.0 ",
    "Entessa ": "Entessa Public License v1.0 ",
    "EPL-1.0 ": "Eclipse Public License 1.0 ",
    "EPL-2.0 ": "Eclipse Public License 2.0 ",
    "ErlPL-1.1 ": "Erlang Public License v1.1 ",
    "etalab-2.0 ": "Etalab Open License 2.0 ",
    "EUDatagrid ": "EU DataGrid Software License ",
    "EUPL-1.0 ": "European Union Public License 1.0 ",
    "EUPL-1.1 ": "European Union Public License 1.1 ",
    "EUPL-1.2 ": "European Union Public License 1.2 ",
    "Eurosym ": "Eurosym License ",
    "Fair ": "Fair License ",
    "Frameworx-1.0 ": "Frameworx Open License 1.0 ",
    "FreeImage ": "FreeImage Public License v1.0 ",
    "FSFAP ": "FSF All Permissive License ",
    "FSFUL ": "FSF Unlimited License ",
    "FSFULLR ": "FSF Unlimited License (with License Retention) ",
    "FTL ": "Freetype Project License ",
    "GFDL-1.1-only ": "GNU Free Documentation License v1.1 only ",
    "GFDL-1.1-or-later ": "GNU Free Documentation License v1.1 or later ",
    "GFDL-1.2-only ": "GNU Free Documentation License v1.2 only ",
    "GFDL-1.2-or-later ": "GNU Free Documentation License v1.2 or later ",
    "GFDL-1.3-only ": "GNU Free Documentation License v1.3 only ",
    "GFDL-1.3-or-later ": "GNU Free Documentation License v1.3 or later ",
    "Giftware ": "Giftware License ",
    "GL2PS ": "GL2PS License ",
    "Glide ": "3dfx Glide License ",
    "Glulxe ": "Glulxe License ",
    "gnuplot ": "gnuplot License ",
    "GPL-1.0-only ": "GNU General Public License v1.0 only ",
    "GPL-1.0-or-later ": "GNU General Public License v1.0 or later ",
    "GPL-2.0-only ": "GNU General Public License v2.0 only ",
    "GPL-2.0-or-later ": "GNU General Public License v2.0 or later ",
    "GPL-3.0-only ": "GNU General Public License v3.0 only ",
    "GPL-3.0-or-later ": "GNU General Public License v3.0 or later ",
    "gSOAP-1.3b ": "gSOAP Public License v1.3b ",
    "HaskellReport ": "Haskell Language Report License ",
    "HPND ": "Historical Permission Notice and Disclaimer ",
    "HPND-sell-variant ": "Historical Permission Notice and Disclaimer - sell variant ",
    "IBM-pibs ": "IBM PowerPC Initialization and Boot Software ",
    "ICU ": "ICU License ",
    "IJG ": "Independent JPEG Group License ",
    "ImageMagick ": "ImageMagick License ",
    "iMatix ": "iMatix Standard Function Library Agreement ",
    "Imlib2 ": "Imlib2 License ",
    "Info-ZIP ": "Info-ZIP License ",
    "Intel ": "Intel Open Source License ",
    "Intel-ACPI ": "Intel ACPI Software License Agreement ",
    "Interbase-1.0 ": "Interbase Public License v1.0 ",
    "IPA ": "IPA Font License ",
    "IPL-1.0 ": "IBM Public License v1.0 ",
    "ISC ": "ISC License ",
    "JasPer-2.0 ": "JasPer License ",
    "JPNIC ": "Japan Network Information Center License ",
    "JSON ": "JSON License ",
    "LAL-1.2 ": "Licence Art Libre 1.2 ",
    "LAL-1.3 ": "Licence Art Libre 1.3 ",
    "Latex2e ": "Latex2e License ",
    "Leptonica ": "Leptonica License ",
    "LGPL-2.0-only ": "GNU Library General Public License v2 only ",
    "LGPL-2.0-or-later ": "GNU Library General Public License v2 or later ",
    "LGPL-2.1-only ": "GNU Lesser General Public License v2.1 only ",
    "LGPL-2.1-or-later ": "GNU Lesser General Public License v2.1 or later ",
    "LGPL-3.0-only ": "GNU Lesser General Public License v3.0 only ",
    "LGPL-3.0-or-later ": "GNU Lesser General Public License v3.0 or later ",
    "LGPLLR ": "Lesser General Public License For Linguistic Resources ",
    "Libpng ": "libpng License ",
    "libpng-2.0 ": "PNG Reference Library version 2 ",
    "libselinux-1.0 ": "libselinux public domain notice ",
    "libtiff ": "libtiff License ",
    "LiLiQ-P-1.1 ": "Licence Libre du Québec – Permissive version 1.1 ",
    "LiLiQ-R-1.1 ": "Licence Libre du Québec – Réciprocité version 1.1 ",
    "LiLiQ-Rplus-1.1 ": "Licence Libre du Québec – Réciprocité forte version 1.1 ",
    "Linux-OpenIB ": "Linux Kernel Variant of OpenIB.org license ",
    "LPL-1.0 ": "Lucent Public License Version 1.0 ",
    "LPL-1.02 ": "Lucent Public License v1.02 ",
    "LPPL-1.0 ": "LaTeX Project Public License v1.0 ",
    "LPPL-1.1 ": "LaTeX Project Public License v1.1 ",
    "LPPL-1.2 ": "LaTeX Project Public License v1.2 ",
    "LPPL-1.3a ": "LaTeX Project Public License v1.3a ",
    "LPPL-1.3c ": "LaTeX Project Public License v1.3c ",
    "MakeIndex ": "MakeIndex License ",
    "MirOS ": "The MirOS Licence ",
    "MIT ": "MIT License ",
    "MIT-0 ": "MIT No Attribution ",
    "MIT-advertising ": "Enlightenment License (e16) ",
    "MIT-CMU ": "CMU License ",
    "MIT-enna ": "enna License ",
    "MIT-feh ": "feh License ",
    "MITNFA ": "MIT +no-false-attribs license ",
    "Motosoto ": "Motosoto License ",
    "mpich2 ": "mpich2 License ",
    "MPL-1.0 ": "Mozilla Public License 1.0 ",
    "MPL-1.1 ": "Mozilla Public License 1.1 ",
    "MPL-2.0 ": "Mozilla Public License 2.0 ",
    "MPL-2.0-no-copyleft-exception ": "Mozilla Public License 2.0 (no copyleft exception) ",
    "MS-PL ": "Microsoft Public License ",
    "MS-RL ": "Microsoft Reciprocal License ",
    "MTLL ": "Matrix Template Library License ",
    "MulanPSL-1.0 ": "Mulan Permissive Software License, Version 1 ",
    "Multics ": "Multics License ",
    "Mup ": "Mup License ",
    "NASA-1.3 ": "NASA Open Source Agreement 1.3 ",
    "Naumen ": "Naumen Public License ",
    "NBPL-1.0 ": "Net Boolean Public License v1 ",
    "NCSA ": "University of Illinois/NCSA Open Source License ",
    "Net-SNMP ": "Net-SNMP License ",
    "NetCDF ": "NetCDF license ",
    "Newsletr ": "Newsletr License ",
    "NGPL ": "Nethack General Public License ",
    "NLOD-1.0 ": "Norwegian Licence for Open Government Data ",
    "NLPL ": "No Limit Public License ",
    "Nokia ": "Nokia Open Source License ",
    "NOSL ": "Netizen Open Source License ",
    "Noweb ": "Noweb License ",
    "NPL-1.0 ": "Netscape Public License v1.0 ",
    "NPL-1.1 ": "Netscape Public License v1.1 ",
    "NPOSL-3.0 ": "Non-Profit Open Software License 3.0 ",
    "NRL ": "NRL License ",
    "NTP ": "NTP License ",
    "NTP-0 ": "NTP No Attribution ",
    "OCCT-PL ": "Open CASCADE Technology Public License ",
    "OCLC-2.0 ": "OCLC Research Public License 2.0 ",
    "ODbL-1.0 ": "ODC Open Database License v1.0 ",
    "ODC-By-1.0 ": "Open Data Commons Attribution License v1.0 ",
    "OFL-1.0 ": "SIL Open Font License 1.0 ",
    "OFL-1.0-no-RFN ": "SIL Open Font License 1.0 with no Reserved Font Name ",
    "OFL-1.0-RFN ": "SIL Open Font License 1.0 with Reserved Font Name ",
    "OFL-1.1 ": "SIL Open Font License 1.1 ",
    "OFL-1.1-no-RFN ": "SIL Open Font License 1.1 with no Reserved Font Name ",
    "OFL-1.1-RFN ": "SIL Open Font License 1.1 with Reserved Font Name ",
    "OGL-Canada-2.0 ": "Open Government Licence - Canada ",
    "OGL-UK-1.0 ": "Open Government Licence v1.0 ",
    "OGL-UK-2.0 ": "Open Government Licence v2.0 ",
    "OGL-UK-3.0 ": "Open Government Licence v3.0 ",
    "OGTSL ": "Open Group Test Suite License ",
    "OLDAP-1.1 ": "Open LDAP Public License v1.1 ",
    "OLDAP-1.2 ": "Open LDAP Public License v1.2 ",
    "OLDAP-1.3 ": "Open LDAP Public License v1.3 ",
    "OLDAP-1.4 ": "Open LDAP Public License v1.4 ",
    "OLDAP-2.0 ": "Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B) ",
    "OLDAP-2.0.1 ": "Open LDAP Public License v2.0.1 ",
    "OLDAP-2.1 ": "Open LDAP Public License v2.1 ",
    "OLDAP-2.2 ": "Open LDAP Public License v2.2 ",
    "OLDAP-2.2.1 ": "Open LDAP Public License v2.2.1 ",
    "OLDAP-2.2.2 ": "Open LDAP Public License 2.2.2 ",
    "OLDAP-2.3 ": "Open LDAP Public License v2.3 ",
    "OLDAP-2.4 ": "Open LDAP Public License v2.4 ",
    "OLDAP-2.5 ": "Open LDAP Public License v2.5 ",
    "OLDAP-2.6 ": "Open LDAP Public License v2.6 ",
    "OLDAP-2.7 ": "Open LDAP Public License v2.7 ",
    "OLDAP-2.8 ": "Open LDAP Public License v2.8 ",
    "OML ": "Open Market License ",
    "OpenSSL ": "OpenSSL License ",
    "OPL-1.0 ": "Open Public License v1.0 ",
    "OSET-PL-2.1 ": "OSET Public License version 2.1 ",
    "OSL-1.0 ": "Open Software License 1.0 ",
    "OSL-1.1 ": "Open Software License 1.1 ",
    "OSL-2.0 ": "Open Software License 2.0 ",
    "OSL-2.1 ": "Open Software License 2.1 ",
    "OSL-3.0 ": "Open Software License 3.0 ",
    "Parity-6.0.0 ": "The Parity Public License 6.0.0 ",
    "PDDL-1.0 ": "ODC Public Domain Dedication & License 1.0 ",
    "PHP-3.0 ": "PHP License v3.0 ",
    "PHP-3.01 ": "PHP License v3.01 ",
    "Plexus ": "Plexus Classworlds License ",
    "PostgreSQL ": "PostgreSQL License ",
    "PSF-2.0 ": "Python Software Foundation License 2.0 ",
    "psfrag ": "psfrag License ",
    "psutils ": "psutils License ",
    "Python-2.0 ": "Python License 2.0 ",
    "Qhull ": "Qhull License ",
    "QPL-1.0 ": "Q Public License 1.0 ",
    "Rdisc ": "Rdisc License ",
    "RHeCos-1.1 ": "Red Hat eCos Public License v1.1 ",
    "RPL-1.1 ": "Reciprocal Public License 1.1 ",
    "RPL-1.5 ": "Reciprocal Public License 1.5 ",
    "RPSL-1.0 ": "RealNetworks Public Source License v1.0 ",
    "RSA-MD ": "RSA Message-Digest License ",
    "RSCPL ": "Ricoh Source Code Public License ",
    "Ruby ": "Ruby License ",
    "SAX-PD ": "Sax Public Domain Notice ",
    "Saxpath ": "Saxpath License ",
    "SCEA ": "SCEA Shared Source License ",
    "Sendmail ": "Sendmail License ",
    "Sendmail-8.23 ": "Sendmail License 8.23 ",
    "SGI-B-1.0 ": "SGI Free Software License B v1.0 ",
    "SGI-B-1.1 ": "SGI Free Software License B v1.1 ",
    "SGI-B-2.0 ": "SGI Free Software License B v2.0 ",
    "SHL-0.5 ": "Solderpad Hardware License v0.5 ",
    "SHL-0.51 ": "Solderpad Hardware License, Version 0.51 ",
    "SimPL-2.0 ": "Simple Public License 2.0 ",
    "SISSL ": "Sun Industry Standards Source License v1.1 ",
    "SISSL-1.2 ": "Sun Industry Standards Source License v1.2 ",
    "Sleepycat ": "Sleepycat License ",
    "SMLNJ ": "Standard ML of New Jersey License ",
    "SMPPL ": "Secure Messaging Protocol Public License ",
    "SNIA ": "SNIA Public License 1.1 ",
    "Spencer-86 ": "Spencer License 86 ",
    "Spencer-94 ": "Spencer License 94 ",
    "Spencer-99 ": "Spencer License 99 ",
    "SPL-1.0 ": "Sun Public License v1.0 ",
    "SSH-OpenSSH ": "SSH OpenSSH license ",
    "SSH-short ": "SSH short notice ",
    "SSPL-1.0 ": "Server Side Public License, v 1 ",
    "SugarCRM-1.1.3 ": "SugarCRM Public License v1.1.3 ",
    "SWL ": "Scheme Widget Library (SWL) Software License Agreement ",
    "TAPR-OHL-1.0 ": "TAPR Open Hardware License v1.0 ",
    "TCL ": "TCL/TK License ",
    "TCP-wrappers ": "TCP Wrappers License ",
    "TMate ": "TMate Open Source License ",
    "TORQUE-1.1 ": "TORQUE v2.5+ Software License v1.1 ",
    "TOSL ": "Trusster Open Source License ",
    "TU-Berlin-1.0 ": "Technische Universitaet Berlin License 1.0 ",
    "TU-Berlin-2.0 ": "Technische Universitaet Berlin License 2.0 ",
    "UCL-1.0 ": "Upstream Compatibility License v1.0 ",
    "Unicode-DFS-2015 ": "Unicode License Agreement - Data Files and Software (2015) ",
    "Unicode-DFS-2016 ": "Unicode License Agreement - Data Files and Software (2016) ",
    "Unicode-TOU ": "Unicode Terms of Use ",
    "Unlicense ": "The Unlicense ",
    "UPL-1.0 ": "Universal Permissive License v1.0 ",
    "Vim ": "Vim License ",
    "VOSTROM ": "VOSTROM Public License for Open Source ",
    "VSL-1.0 ": "Vovida Software License v1.0 ",
    "W3C ": "W3C Software Notice and License (2002-12-31) ",
    "W3C-19980720 ": "W3C Software Notice and License (1998-07-20) ",
    "W3C-20150513 ": "W3C Software Notice and Document License (2015-05-13) ",
    "Watcom-1.0 ": "Sybase Open Watcom Public License 1.0 ",
    "Wsuipa ": "Wsuipa License ",
    "WTFPL ": "Do What The F*ck You Want To Public License ",
    "X11 ": "X11 License ",
    "Xerox ": "Xerox License ",
    "XFree86-1.1 ": "XFree86 License 1.1 ",
    "xinetd ": "xinetd License ",
    "Xnet ": "X.Net License ",
    "xpp ": "XPP License ",
    "XSkat ": "XSkat License ",
    "YPL-1.0 ": "Yahoo! Public License v1.0 ",
    "YPL-1.1 ": "Yahoo! Public License v1.1 ",
    "Zed ": "Zed License ",
    "Zend-2.0 ": "Zend License v2.0 ",
    "Zimbra-1.3 ": "Zimbra Public License v1.3 ",
    "Zimbra-1.4 ": "Zimbra Public License v1.4 ",
    "Zlib ": "zlib License ",
    "zlib-acknowledgement ": "zlib/libpng License with Acknowledgement ",
    "ZPL-1.1 ": "Zope Public License 1.1 ",
    "ZPL-2.0 ": "Zope Public License 2.0 ",
    "ZPL-2.1 ": "Zope Public License 2.1 "
  }

  var tz = { "A": 1, "ACDT": 10.5, "ACST": 9.5, "ADT": -3, "AEDT": 11, "AEST": 10, "AKDT": -8, "AKST": -9, "AST": -4, "AWST": 8, "B": 2, "BST": 1, "C": 3, "CDT": -5, "CEDT": 2, "CEST": 2, "CET": 1, "CST": -6, "CXT": 7, "D": 4, "E": 5, "EDT": -4, "EEDT": 3, "EEST": 3, "EET": 2, "EST": -5, "F": 6, "G": 7, "GMT": 0, "H": 8, "HAA": -3, "HAC": -5, "HADT": -9, "HAE": -4, "HAP": -7, "HAR": -6, "HAST": -10, "HAT": -2.5, "HAY": -8, "HNA": -4, "HNC": -6, "HNE": -5, "HNP": -8, "HNR": -7, "HNT": -3.5, "HNY": -9, "I": 9, "IST": 9, "IST": 1, "JST": 9, "K": 10, "L": 11, "M": 12, "MDT": -6, "MESZ": 2, "MEZ": 1, "MST": -7, "N": -1, "NDT": -2.5, "NFT": 11.5, "NST": -3.5, "O": -2, "P": -3, "PDT": -7, "PST": -8, "Q": -4, "R": -5, "S": -6, "T": -7, "U": -8, "UTC": 0, "UT": 0, "V": -9, "W": -10, "WEDT": 1, "WEST": 1, "WET": 0, "WST": 8, "X": -11, "Y": -12, "Z": 0 };


  // Enhance DOM elements
  var els = {};

  // Check if the ID has been used already
  els.id = document.getElementById('id');
  els.id.addEventListener('keyup', function (e) {
    e.currentTarget.setAttribute('class', '');
    msg = document.getElementById('id-warning');
    if (msg) e.currentTarget.parentNode.removeChild(msg);
    for (k = 0; k < keys.length; k++) {
      if (keys[k] == e.currentTarget.value) {
        e.currentTarget.setAttribute('class', "invalid");
        element = document.createElement('div');
        element.id = "id-warning";
        element.setAttribute('class', "error msg");
        element.innerHTML = "This ID already exists in the public index";
        e.currentTarget.insertAdjacentElement('afterend', element);
        continue;
      }
    }
  });


  // Add the list of licences and make the form elements interact
  els.licence = { 'main': document.getElementById('licence') };
  els.licence.spdx = document.createElement('select');
  els.licence.spdx.id = "licence-spdx";
  els.licence.main.insertAdjacentElement('beforebegin', els.licence.spdx);
  els.licence.label = document.createElement('label');
  els.licence.label.setAttribute('for', 'licence');
  els.licence.label.innerHTML = 'Custom string:';
  els.licence.main.insertAdjacentElement('beforebegin', els.licence.label);
  document.getElementById('label-licence').setAttribute('for', 'licence-spdx');
  var str = "<option value=\"\">Custom licence</option>";
  for (var l in licences) str += '<option value="' + l + '">' + licences[l] + '</option>';
  els.licence.spdx.innerHTML = str;
  els.licence.spdx.style.display = "inline-block";
  els.licence.spdx.addEventListener('change', function (e) {
    els.licence.main.style.display = (e.currentTarget.value) ? "none" : "inline-block";
    els.licence.label.style.display = (e.currentTarget.value) ? "none" : "inline-block";
    els.licence.main.value = e.currentTarget.value;
  });

  // Function to construct a datetime stamp builder from individual date and time fields (because datetime-local isn't well supported)
  // Need to add timezones to this
  function buildDateTime(name) {
    els[name] = { 'main': document.getElementById(name) };

    els[name].date = document.createElement('input');
    els[name].date.type = "date";
    els[name].date.id = name + '-date';
    els[name].date.setAttribute('class', 'datetime');
    els[name].main.insertAdjacentElement('afterend', els[name].date);

    l = document.createElement('label');
    l.innerHTML = "Date:";
    l.setAttribute('for', name + "-date");
    l.setAttribute('class', 'sub');
    els[name].date.insertAdjacentElement('beforebegin', l);

    els[name].time = document.createElement('input');
    els[name].time.type = "time";
    els[name].time.id = name + '-time';
    els[name].time.setAttribute('class', 'datetime');
    els[name].date.insertAdjacentElement('afterend', els[name].time);

    l = document.createElement('label');
    l.innerHTML = "Time:";
    l.setAttribute('for', name + "-time");
    l.setAttribute('class', 'sub');
    els[name].time.insertAdjacentElement('beforebegin', l);

    // Build a timezone select box
    var str, t, dt, h, m;
    str = '';
    for (t in tz) {
      // Calculate timezone offset
      toff = tz[t];
      h = Math.floor(Math.abs(toff));
      m = Math.round((Math.abs(toff) - h) * 60);
      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      dt = (toff < 0 ? '-' : '+') + h + ":" + m;
      str += '<option value="' + dt + '"' + (t == "UTC" ? ' selected="selected"' : '') + '>' + t + ' (' + dt + ')</option>';
    }
    if (str) {
      t = document.createElement('select');
      t.innerHTML = str;
      t.setAttribute('class', 'tz');
      t.id = name + '-tz';
      els[name].tz = t;
      els[name].time.insertAdjacentElement('afterend', els[name].tz);

      l = document.createElement('label');
      l.innerHTML = "TZ:";
      l.setAttribute('for', name + "-tz");
      l.setAttribute('class', 'sub');
      els[name].tz.insertAdjacentElement('beforebegin', l);

    }

    els[name].main.style.display = "none";
    els[name].date.style.display = "inline-block";
    els[name].time.style.display = "inline-block";

    function updateTime(el) {
      var dt = el.date.value;
      if (el.time.value) {
        dt = dt + 'T' + el.time.value + el.tz.value;
      }
      el.main.value = dt;
    }
    els[name].date.addEventListener('change', function (e) { updateTime(els[name]); });
    els[name].time.addEventListener('change', function (e) { updateTime(els[name]); });
    els[name].tz.addEventListener('change', function (e) { updateTime(els[name]); });
  }

  buildDateTime('createdAt');
  buildDateTime('updatedAt');

  // Add a close button to an element. We send the DOM element and the type (for the label)
  function addCloseButtonTo(el, type) {
    var btn = document.createElement('button');
    el.appendChild(btn);
    btn.innerHTML = "&times;";
    btn.class = "remove";
    btn.title = "Remove this " + type;
    btn.data = type;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var ul, li, i, inp;
      ul = e.currentTarget.parentNode.parentNode;
      li = ul.querySelectorAll('li');
      if (li.length > 1) ul.removeChild(e.currentTarget.parentNode);
      else {
        clearInputs(li[0]);
        li[0].style.display = "none";
      }
    });
    return;
  }

  // Initiate a list 
  function buildList(name) {
    var add = name + '-' + add;
    els[name] = document.getElementById(name);
    // Create "+ Add" button
    els[add] = document.createElement('button');
    els[add].title = "Add item";
    els[add].innerHTML = "&plus; Add " + name;
    els[add].type = "button";
    els[add].class = "button";
    // Attach event to button
    els[add].addEventListener('click', function (e) { newListItem(els[name]); });
    // Add button to DOM
    els[name].insertAdjacentElement('afterend', els[add]);
    var li = els[name].querySelectorAll('li');
    // Add a close button to the existing template
    addCloseButtonTo(li[0], name);
    li[0].style.display = "none";
    return;
  }
  // Update the IDs for numbered form elements
  function updateIDs(el, n) {
    var labels, i, inputs, textareas;
    labels = el.querySelectorAll('label');
    inputs = el.querySelectorAll('input, textareas, select');
    textareas = el.querySelectorAll('textarea');
    for (i = 0; i < labels.length; i++) labels[i].setAttribute('for', labels[i].getAttribute('for').replace('-0', '-' + n));
    for (i = 0; i < inputs.length; i++) inputs[i].setAttribute('id', inputs[i].getAttribute('id').replace('-0', '-' + n)).setAttribute('name', inputs[i].getAttribute('id').replace('-0', '-' + n));
    return;
  }
  // Create a new list item
  function newListItem(res) {
    var li = res.querySelectorAll('li');
    if (li.length > 0) {
      if (li[0].style.display != "none") {
        l = li[0].cloneNode(true);
        btn = l.querySelector('button');
        typ = btn.getAttribute('data');
        l.removeChild(btn);
        l = clearInputs(l);
        res.appendChild(l);
        updateIDs(l, li.length);
        addCloseButtonTo(l, typ);
      } else {
        li[0].style.display = "";
      }
    }
  }
  // Clear the inputs for a list item
  function clearInputs(el) {
    // Clear the values as this is the default entry
    inp = el.querySelectorAll('input, textarea');
    for (i = 0; i < inp.length; i++) inp[i].value = "";
    return el;
  }

  buildList('resources');
  buildList('references');


  function buildJSONLine(name, json) {
    if (document.forms['emer2gent-add'].elements[name].value) return (json ? json + ',\n' : '') + '\t"' + name + '":"' + document.forms['emer2gent-add'].elements[name].value + '"';
    else return json;
  }

  function buildJSONBlock(name, previous) {
    var li, i, j, json, bit;
    li = els[name].querySelectorAll('li');
    json = "";
    for (i = 0; i < li.length; i++) {
      console.log(li[i]);
      bit = "";
      inp = li[i].querySelectorAll('input, textarea');
      for (j = 0; j < inp.length; j++) {
        id = inp[j].getAttribute('id').replace(name + "-", "").replace(/-[0-9]+/, "");
        if (inp[j].value) bit += (bit ? ',\n' : '') + '\t\t"' + id + '":"' + inp[j].value + '"';
      }
      json = (json ? '\n\t},' : '') + (bit ? '{\n' + bit + '\n\t}' : '');
    }
    if (json) {
      return previous + ',\n\t"' + name + '":[' + json + ']';
    } else {
      return previous;
    }
  }

  function buildJSON() {
    var json, ts, challenges, tags, i;
    json = "";
    json = buildJSONLine('id', json);
    json = buildJSONLine('sharing', json);
    ts = document.forms['emer2gent-add'].elements['topics'];
    if (ts) {
      topicstr = "";
      for (i = 0; i < ts.length; i++) {
        if (ts[i].checked) topicstr += (topicstr ? ',' : '') + '"' + ts[i].value + '"';
      }
      json += (json ? ',\n' : '') + '\t"topics":[' + topicstr + ']';
    }
    challenges = document.forms['emer2gent-add'].elements['challenges'];
    if (challenges) {
      challengeStr = "";
      for (i = 0; i < ts.length; i++) {
        if (challenges[i].checked) challengeStr += (challengeStr ? ',' : '') + '"' + challenges[i].value + '"';
      }
      json += (json ? ',\n' : '') + '\t"challenges":[' + challengeStr + ']';
    }
    tags = document.forms['emer2gent-add'].elements['tags'].value.split(/ ?; ?/);
    tagstr = "";
    for (i = 0; i < tags.length; i++) tagstr += (tagstr ? ',' : '') + '"' + tags[i] + '"';
    json += (json ? ',\n' : '') + '\t"tags":[' + tagstr + ']';
    json = buildJSONLine('licence', json);
    json = buildJSONLine('createdAt', json);
    json = buildJSONLine('update_frequency', json);
    json = buildJSONLine('title', json);
    json = buildJSONLine('author', json);
    json = buildJSONLine('author_email', json);
    json = buildJSONLine('url', json);
    json = buildJSONLine('maintainer', json);
    json = buildJSONLine('maintainer_email', json);
    json = buildJSONLine('description', json);
    // Do special things for resources]
    json = buildJSONBlock('resources', json);
    json = buildJSONBlock('references', json);
    json = '{\n' + json + '\n}';
    return json;
  }

  function processForm(inline) {
    var json = buildJSON();
    console.log(json, inline);
    document.getElementById('json').value = json;
    if (inline) saveFile(json)
    return false;
  }

  function saveFile(json) {
    // Bail out if there is no Blob function
    if (typeof Blob !== "function") return this;

    var textFileAsBlob = new Blob([json], { type: 'text/json' });
    var fileNameToSaveAs = "dataset.json";
    function destroyClickedElement(event) { document.body.removeChild(event.target); }
    var dl = document.createElement("a");
    dl.download = fileNameToSaveAs;
    dl.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      dl.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      dl.href = window.URL.createObjectURL(textFileAsBlob);
      dl.onclick = destroyClickedElement;
      dl.style.display = "none";
      document.body.appendChild(dl);
    }
    dl.click();
  }

  els.form = document.getElementById('emer2gent-add');
  els.form.addEventListener('submit', function (e) { return processForm(false); });
  els.download = document.getElementById('download');
  els.download.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); processForm(true); });


  // Remove non-Javascript parts
  nojs = document.getElementsByClassName('no-js');
  for (var i = 0; i < nojs.length; i++) nojs[i].style.display = "none";

 }) (window || this);