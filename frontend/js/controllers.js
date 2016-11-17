angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper', 'ui.select'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
})

.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })
    .controller('DetailsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("details"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Details"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formData = {};
        $scope.detailSubmit = function (input) {
            $scope.storenm = input.storeName.name;
            $scope.formData.storeName = $scope.storenm
                // console.log(input.storeName.name);
                // $scope.inputName = _.each($scope.formData,function(val,key){
                //     console.log(val);
                // })
                // console.log('  $scope.inputName',$scope.inputName);
            $scope.saveUser = $.jStorage.set("userDetail", input);
            console.log('$scope.saveUser', $scope.saveUser);
            // NavigationService.formSubmit(input,function(data){
            //   console.log(data);
            //   console.log(input);
            //
            // })
        }
        $scope.ages = [{
            name: 'Below 25'
        }, {
            name: '25 to 30 years'
        }, {
            name: '31 to 35 years'
        }, {
            name: '36 years and above'
        }];

        $scope.tenure = [{
            name: 'Less than 3 months'
        }, {
            name: '3 months to 1 year'
        }, {
            name: '1 to 3 years'
        }, {
            name: '3 to 5 years'
        }, {
            name: '5 years and above'
        }];

        $scope.gender = [{
            gen: 'Male'
        }, {
            gen: 'Female'
        }];

        $scope.storename = [{
            name: "PT-Kolkata-South City Mall"
        }, {
            name: "PT-Kolkata-Camac Street"
        }, {
            name: "PT-Kolkata-Kankurgachi"
        }, {
            name: "PT-Kolkata-Gariahat Road"
        }, {
            name: "PT-Howrah-Riverside Avani Mall"
        }, {
            name: "PT-Kolkata-PS Residency"
        }, {
            name: "PW-Howrah-Dobson Road"
        }, {
            name: "PT-Kolkata-Sodepur"
        }, {
            name: "PT-Kolkata-Baruipur"
        }, {
            name: "PT-Kolkata-City Centre"
        }, {
            name: "PT-Kolkata-Merrill Residency"
        }, {
            name: "PT-Kolkata-Diamond City Mall"
        }, {
            name: "PT-Kolkata-NSC Bose Road"
        }, {
            name: "PT-Cuttack-Shanti Enclave"
        }, {
            name: "PT-Bhubaneshwar-Sahid Nagar"
        }, {
            name: "PT-Guwahati-D.T. Tower"
        }, {
            name: "PT-Kolkata-Saltlake"
        }, {
            name: "PT-Siliguri-Cosmos"
        }, {
            name: "PT-Siliguri-Orbit Mall"
        }, {
            name: "PT-Patna-Exhibition Road"
        }, {
            name: "PT-Durgapur-Junction Mall"
        }, {
            name: "PT-Silchar-Goldighi Mall"
        }, {
            name: "PT-Ranchi-Spring City Mall"
        }, {
            name: "PT-Ranchi-Eastern Mall"
        }, {
            name: "PT-Patna-Vasundhara Metro Mall"
        }, {
            name: "PT-Dhanbad-Sriram Mall"
        }, {
            name: "PT-Haldia-City Centre"
        }, {
            name: "PT-Bhubaneshwar-Galleria Mall"
        }, {
            name: "PT-Shillong-Laitumkhrah"
        }, {
            name: "PT-Jorhat-ABS Mall"
        }, {
            name: "PT-Asansol-Regal Plaza"
        }, {
            name: "PT-Jhrasuguda-Shanti City Cent"
        }, {
            name: "PFO-Indore-C-21 Century Mall"
        }, {
            name: "PFO-Secunderabad-Himayat Nagar"
        }, {
            name: "PFO-Secunderabad-SD Road"
        }, {
            name: "PFO-Chennai-Adyar"
        }, {
            name: "PFO-Bengaluru-Market Square"
        }, {
            name: "PFO-Bengaluru-Rajajinagar"
        }, {
            name: "PFO-Bengaluru-Rammurthy Nagar"
        }, {
            name: "PFO-Tirumalgiri-N.S.Tower"
        }, {
            name: "PFO-Vasai-Dattani Square Mall"
        }, {
            name: "PFO-Ahmedabad-SG Highway"
        }, {
            name: "PFO - Ahmedabad - Maninagar"
        }, {
            name: "PFO-Panvel-K Mall"
        }, {
            name: "PT-Lucknow- Saharagunj"
        }, {
            name: "PT-Kanpur-Rave Moti"
        }, {
            name: "PT-Allahabad-Vinayak City Cent"
        }, {
            name: "PT-New Delhi-South Extension"
        }, {
            name: "PT-Delhi-Karol Bagh"
        }, {
            name: "PT-Zeerakhpur-Downtown Sq Mall"
        }, {
            name: "PT-Kanpur-Tilak Nagar"
        }, {
            name: "PT-Gurgaon-Main Mehrauli#Gurga"
        }, {
            name: "PT-Delhi-Rohini-Rithala"
        }, {
            name: "PT-Lucknow-Hazratgunj1"
        }, {
            name: "PT-Bhopal-DB Mall"
        }, {
            name: "PT-Noida-Great India Place"
        }, {
            name: "PT-Noida-Mall of India"
        }, {
            name: "PT-Delhi-Shahdara"
        }, {
            name: "PT-Ghaziabad-Indirapuram"
        }, {
            name: "PT-Bhiwadi-V Square Mall"
        }, {
            name: "PT-Lucknow-Pheonix Mall"
        }, {
            name: "PT-Varanasi-Sigra"
        }, {
            name: "PT-Indore-Tukoganj Main Road"
        }, {
            name: "PT-Indore-Malhar Mega Mall"
        }, {
            name: "PT-Janakpuri-Orchard Road"
        }, {
            name: "PT-Bareilly-Pheonix Mkt City"
        }, {
            name: "PT-Noida-Garden Galleria"
        }, {
            name: "PT-Delhi-Janakpuri"
        }, {
            name: "PT-Delhi-Rohini Unity One"
        }, {
            name: "PT-New Delhi Dwarka City Centr"
        }, {
            name: "PT-Chandigarh-Elante Mall"
        }, {
            name: "PT-Mohali-North Country Mall"
        }, {
            name: "PT-New Delhi-Vasant Kunj"
        }, {
            name: "PW-Delhi-Pacific Mall"
        }, {
            name: "PT-Bhopal-C21 Mall"
        }, {
            name: "PT-Moradabad-Kanth Road"
        }, {
            name: "PT-Gurgaon-Ambience Island"
        }, {
            name: "PT-Muzzafarnagar-ASJ Grand Pla"
        }, {
            name: "PT-Amritsar-Basant Avenue"
        }, {
            name: "PT-Dehradun-Pacific Mall"
        }, {
            name: "PT-Delhi-Citywalk"
        }, {
            name: "PT-Meerut-Sports Good Complex"
        }, {
            name: "PT-Yamunanagar-Universal Mall"
        }, {
            name: "PT-Ghaziabad-World Square Mall"
        }, {
            name: "PT-Haridwar-Pentagon Mall"
        }, {
            name: "PT-Noida-Logix Mall"
        }, {
            name: "PT-Gurgaon-MGF Metropolis"
        }, {
            name: "PT-Jaipur-Triton Mall"
        }, {
            name: "PK-Delhi-Model Town"
        }, {
            name: "PT-Gurgaon-Sohna Road"
        }, {
            name: "PW-Delhi-Kamla Nagar"
        }, {
            name: "PT-Sagar-Jiyo Complex"
        }, {
            name: "PT-Agra-SRK Mall"
        }, {
            name: "PT-Jalandhar-Curo Mall"
        }, {
            name: "PT-Jaipur-C Scheme"
        }, {
            name: "PT-Bhatinda-Mittal City Mall"
        }, {
            name: "PT-Saharanpur-GNG Mall"
        }, {
            name: "PT-Patiala-Omaxe Mall"
        }, {
            name: "PT-Panipat-Fun City Mall"
        }, {
            name: "PT-Jammu-Wave Mall"
        }, {
            name: "PT-Jabalpur-South Avenue Mall"
        }, {
            name: "PT-Delhi-Shalimar Bagh"
        }, {
            name: "PT-Hyderabad-Begumpet S. P.Roa"
        }, {
            name: "PT-Hyderabad-Inorbit Mall"
        }, {
            name: "PT-Chennai-Manickam Road"
        }, {
            name: "PT-Hyderabad-Namishree Mall"
        }, {
            name: "PT-Chennai-Express Avenue Mall"
        }, {
            name: "PT-Bangalore-Cosmos"
        }, {
            name: "PT-Bangalore-Banerghatta"
        }, {
            name: "PT-Chennai - T Nagar"
        }, {
            name: "PT-Coimbatore-Brookfield"
        }, {
            name: "PT-Bengaluru-Indiranagar"
        }, {
            name: "PT-Bengaluru-Phoenix Market"
        }, {
            name: "PT-Vishakapatanam-Dabagarden"
        }, {
            name: "PT-Mangalore-City Center"
        }, {
            name: "PT-Mysore-Garuda Mall"
        }, {
            name: "PT-Bangalore-Mantri Mall"
        }, {
            name: "PT-Bengaluru-Jayanagar"
        }, {
            name: "PT-Coimbatore-Fun Republic"
        }, {
            name: "PT-Chennai-Phoenix Market City"
        }, {
            name: "PT-Bengaluru-MG Road"
        }, {
            name: "PT-Hubli-Urban Oasis Mall"
        }, {
            name: "PT-Vijayawada-PVP Mall-MG Road"
        }, {
            name: "PT-Bengaluru-VR Mall"
        }, {
            name: "PT-Hyderabad-Forum Sujana Mall"
        }, {
            name: "PT-Mangalore-Forum Vijaya Mall"
        }, {
            name: "PT-Hyderabad-Kothapet"
        }, {
            name: "PT-Visakhapatnam-MVR Vinayagar"
        }, {
            name: "PT-Guntur-VJ Mall"
        }, {
            name: "PT-Calicut-Hilite City"
        }, {
            name: "PT-Vizianagaram-SRK Heights"
        }, {
            name: "PT-Thrissur-Sobha City"
        }, {
            name: "PT - Salem-GK Towers"
        }, {
            name: "PT -Trichy-Annamalai Nagar"
        }, {
            name: "PT-Palakkad-College Road"
        }, {
            name: "PT-Erode-Brough Road"
        }, {
            name: "PT -Cochin-Imperial Trade"
        }, {
            name: "PT-Mumbai-Mulund (West)"
        }, {
            name: "PT-Ahmedabad-Law Garden"
        }, {
            name: "PT-Vadodara-Inorbit Mall"
        }, {
            name: "PT-Baroda-IndraprasthaEllora P"
        }, {
            name: "PT-Mumbai -Bhayander"
        }, {
            name: "PT-Mumbai-Lower Parel"
        }, {
            name: "PT-Women- Thane"
        }, {
            name: "PT-Mumbai-Dahisar"
        }, {
            name: "PW-Nagpur-Jagat Tower"
        }, {
            name: "PT-Pune-SGS Mall"
        }, {
            name: "PT-Mumbai-Growel Kandivali"
        }, {
            name: "PT-Ahmedabad-Alpha One Mall"
        }, {
            name: "PT-Mumbai-Borivali (W)"
        }, {
            name: "PT-Ahmedabad-Chandkheda"
        }, {
            name: "PT-Mumbai-Pheonix Market"
        }, {
            name: "PT-Kalyan-Metro Junction Mall"
        }, {
            name: "PT-Rajkot-Iskon Mall"
        }, {
            name: "PT-Nasik-Lawate Nagar"
        }, {
            name: "PT-Nagpur-Velocity Mall"
        }, {
            name: "PT-Mumbai-Infinity Andheri"
        }, {
            name: "PT-Nagpur-Empress City"
        }, {
            name: "PT-Ahmedabad-Prahalad Nagar"
        }, {
            name: "PT-Ahmedabad-Gulmahor Mall"
        }, {
            name: "PT-Pune-ICC Tech Park"
        }, {
            name: "PT-Aurangabad-Prozone Mall"
        }, {
            name: "PT-Thane-Viva City"
        }, {
            name: "PT-Mumbai-Infinity Malad"
        }, {
            name: "PT-Pune-Phoenix Market"
        }, {
            name: "PT-Surat-Iscon Mall"
        }, {
            name: "PT-Ghatkopar-R-Town Centre"
        }, {
            name: "PT-Bilaspur-Ram Magneto Mall"
        }, {
            name: "PT-Pune-NIBM"
        }, {
            name: "PT-Pune-Kumar Pacific Mall"
        }, {
            name: "PT-Kids-Ahmedabad-Prahladnagar"
        }, {
            name: "PT-Bhilai-Surya Treasure Islan"
        }, {
            name: "PT-Pune-Seasons Mall"
        }, {
            name: "PT-Raipur-City Centre"
        }, {
            name: "PT-PUNE-BANER"
        }, {
            name: "PT-Surat-Deepkamal Mall"
        }];

        $scope.zone = [{
            name: 'North'
        }, {
            name: 'South'
        }, {
            name: 'East'
        }, {
            name: 'West'
        }];

    })


.controller('StepsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    $scope.template = TemplateService.changecontent("steps"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Steps"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.questn = [];
    $scope.myans = '';

    $scope.$on('$stateChangeStart', function (event, toState) {
        console.log(toState);

        console.log(answer);
        //  if (!answer) {
        //      event.preventDefault();
        //  }
        if (toState.name == 'thankyou') {

            console.log('herer');
        } else {
            var answer = alert("You cannot view your previous answer");
            event.preventDefault();
        }
    });




    console.log($scope.myans.length);
    $scope.showDot = function (id) {
        $scope.myans = '';
        if (id == 1) {
            console.log("inim1");
            $scope.myans = "Strongly Agree";
            console.log($scope.myans.length);
            $scope.displayDot1 = true;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;


        } else if (id == 2) {

            $scope.myans = "Agree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = true;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;

        } else if (id == 3) {
            $scope.myans = "Not Sure";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = true;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;

        } else if (id == 4) {
            $scope.myans = "Disagree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = true;
            $scope.displayDot5 = false;

        } else if (id == 5) {
            $scope.myans = "Strongly Disagree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = true;

        }
    };


    $scope.questions = [{
            question: "1. I am aware of my goals/KRAs and understand them well."
        }, {
            question: "2. My manager provides feedback on my performance regularly."
        }, {
            question: "3. I receive training to understand and do my job well."
        }, {
            question: "4. My manager encourages me to apply the learning in my day to day work."
        }, {
            question: "5. I have good understanding of the incentive scheme. "
        }, {
            question: "6. My manager helps and guides me to improve in my job."
        }, {
            question: "7. In my store, customer service is given the maximum importance."
        }, {
            question: "8. My manager encourages teamwork and expects us to help across departments/functions."
        }, {
            question: "9. I am aware of I Pearl Program selection criteria."
        }, {
            question: "10. I am recognized for good work by my manager."
        }, {
            question: "11. I take my weekly offs on a regular basis."
        }, {
            question: "12. My store manager is open and clear while communicating with us."
        }, {
            question: "13. My store manager connects with us to understand our concerns/challenges."
        }, {
            question: "14. The washroom facilities are clean at the store."
        }, {
            question: "15. I have access to safe drinking water at the store."
        }, {
            question: "16. I get time to rest during my breaks while at work."
        }, {
            question: "17. I am aware of the process to raise a concern related to Value Violation / Harassment."
        }, {
            question: "18. The store environment is safe for me to work in."
        }, {
            question: "19. I am satisfied/happy working with Pantaloons."
        }, {
            question: "20. I will refer Pantaloons as a good place to work to my friends and family members."
        }

    ];
    $scope.myans = {};
    $scope.boy = true;
    $scope.q = 0;
    $scope.nextQtn = function (w) {
        $scope.displayDot1 = false;
        $scope.displayDot2 = false;
        $scope.displayDot3 = false;
        $scope.displayDot4 = false;
        $scope.displayDot5 = false;
        console.log('$scope.q', $scope.q);
        if (w < $scope.questions.length - 1) {
            w++;
            $scope.q = w;

            if (w % 2 == 0) {
                $scope.boy = true;
                $scope.girl = false;
            } else if (w % 2 != 0) {
                $scope.boy = false;
                $scope.girl = true;
            }
        } else {
            $scope.q = 20;
            $state.go("thankyou");
        }

    }
    $scope.userAnswers = [];
    $scope.finalData = {};
    $scope.quesAns = function (ques) {
        $scope.myques = ques;

        console.log('$scope.myques', $scope.myques);
        // if ($scope.displayDot1) {
        //     $scope.myans = "Strongly Agree";
        // }
        // $scope.userAnswers = [];
        // if(_.isEmpty($scope.myques)){
        //   console.log('yes m empty');
        // }
        $scope.userAnswers.push({
            questionString: $scope.myques,
            answerString: $scope.myans
        });
        console.log('$scope.userAnswers', $scope.userAnswers);

        $scope.saveUserDetail = $.jStorage.get("userDetail");
        // console.log('$scope.saveUserDetail', $scope.saveUserDetail);
        $scope.saveUser = $.jStorage.set("userDetailQues", $scope.userAnswers);
        var other = {
            'userAnswers': $scope.saveUser
        };
        // console.log('$scope.saveUser', $scope.saveUser);
        // $scope.finalData =$scope.saveUserDetail + $scope.saveUser;
        $scope.finalData = _.merge($scope.saveUserDetail, other);
        // console.log('$scope.finalData',$scope.finalData);
        if ($scope.q > 18) {
            NavigationService.formSubmit($scope.finalData, function (data) {
                // console.log(data);
                // console.log('$scope.finalData',$scope.finalData);

            })
        }
        $scope.myans = '';
    }

})

.controller('ThankYouCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("thankyou"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Thank You"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



})




.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;