<?php
    class Config{
        // Datenbank Verbindungs Credentials
        public static $dbname = 'hz_software';
        public static $host = 'localhost';
        public static $username = 'root';
        public static $password = '';
        
        // JWT SECRET
		public static $secret = 'ich_bin_sehr_geheim';
        
        // Tabellennamen
        public static $aktuelle_probleme = 'aktuelle_probleme';
        public static $auftraege = 'auftraege';
        public static $freigabeInfo = 'freigabe';
        public static $machines = 'machines';
        public static $pd_kontrolle = 'pd_kontrolle';
        public static $pd_perpherie = 'pd_peripherie';
        public static $pd_wzk = 'pd_wzk';
        public static $products = 'products';
        public static $produktionsdaten = 'produktionsdaten';
        public static $userTable = 'user';
        public static $wkz_lebenslauf = 'werkzeuglebenslauf';
        public static $zwt_machine_pd = 'zwt_machine_pd';
    }