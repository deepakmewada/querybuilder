
        selectData.forEach(item => {
            $('#table').append('<option>' + item.name + '</option>');
        })

        function handleColumn(e) {
            let tableValue = e.value;
            selectData.forEach(item => {
                if (item.name === tableValue) {
                    $('#column').find('option').remove()
                    $('#column').append('<option value="" selected disabled >- Select -</option>');
                    item.columns.forEach(option => {

                        $('#column').append('<option value="' + option.name + '"">' + option.title +
                            '</option>');
                    }) 
                }
            })
            
        }
        //var sql_import_export = 'name LIKE "%Johnny%" AND (category = 2 OR in_stock = 1)';

		var sql_import_export = 'sender.groupId = "IUK" AND (sender.countryCode = "GB" OR sender.channelId = "WEB")';

        /*var rules_basic = {
            condition: 'AND',
            rules: [{
                id: 'price',
                operator: 'less',
                value: 10.25
            }, {
                condition: 'OR',
                rules: [{
                    id: 'category',
                    operator: 'equal',
                    value: 2
                }, {
                    id: 'category',
                    operator: 'equal',
                    value: 1
                }]
            }]
        };*/
		
		 var rules_basic = {
            condition: 'AND',
            rules: [{
                id: 'sender.groupId',
                operator: 'equal',
                value: 'IUK'
            }, {
                condition: 'OR',
                rules: [{
                    id: 'sender.countryCode',
                    operator: 'equal',
                    value: 'GB'
                }, {
                    id: 'sender.channelId',
                    operator: 'equal',
                    value: 'WEB'
                }]
            }]
        };


        $('#builder').queryBuilder({
            // filters will work like options
            filters: [
				{
                    id: 'sender.groupId',
                    label: 'Group Id',
                    type: 'string',
                    input: 'select',
                    values: {
                        'IUK': 'IUK - ICICI United Kingdom',
                        'ICA': 'ICA - ICICI Canada',
                        'RG': 'RG - RemitGuru'
                    },
                    operators: ['equal', 'not_equal']
                },
				{
                    id: 'sender.userId',
                    label: 'User Id',
                    type: 'string',
                },
				{
                    id: 'sender.loginId',
                    label: 'Login Id',
                    type: 'string',
                },
				{
                    id: 'sender.firstName',
                    label: 'First Name',
                    type: 'string',
                },
				{
                    id: 'sender.lastName',
                    label: 'Last Name',
                    type: 'string',
                },
				 {
                    id: 'sender.registartionDate',
                    label: 'Registartion Date',
                    type: 'date',
                    validation: {
                        format: 'YYYY/MM/DD'
                    },
                    plugin: 'datepicker',
                    plugin_config: {
                        format: 'yyyy/mm/dd',
                        todayBtn: 'linked',
                        todayHighlight: true,
                        autoclose: true
                    }
                },
				{
                    id: 'sender.emailId',
                    label: 'EmailId',
                    type: 'string',
                },
				{
                    id: 'sender.mobile',
                    label: 'Mobile',
                    type: 'string',
                },
				{
                    id: 'sender.state',
                    label: 'State',
                    type: 'string',
                },
				{
                    id: 'sender.countryCode',
                    label: 'Country Code',
                    type: 'string',
					input: 'select',
                    values: {
                        'GB': 'United Kingdom',
                        'CA': 'Canada',
                        'IN': 'India'
                    },
                    operators: ['equal', 'not_equal']
                },				
				{
                    id: 'sender.industry',
                    label: 'Industry',
                    type: 'string',
                },
				{
                    id: 'sender.marketingRef',
                    label: 'Marketing Reference',
                    type: 'string',
                },
				{
                    id: 'sender.nationality',
                    label: 'Nationality',
                    type: 'string',
                },
				{
                    id: 'sender.channelId',
                    label: 'Channel Id',
                    type: 'string',
                },
				{
                    id: 'sender.marketCommunication',
                    label: 'Market Communication',
                    type: 'string',
                },
				{
                    id: 'sender.pageReferer',
                    label: 'Page Referer',
                    type: 'string',
                },
			
				{
                    id: 'name',
                    label: 'Name',
                    type: 'string'
                }, {
                    id: 'category',
                    label: 'Category',
                    type: 'integer',
                    input: 'select',
                    values: {
                        1: 'Books',
                        2: 'Movies',
                        3: 'Music',
                        4: 'Tools',
                        5: 'Goodies',
                        6: 'Clothes'
                    },
                    operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
                }, {
                    id: 'in_stock',
                    label: 'In stock',
                    type: 'integer',
                    input: 'radio',
                    values: {
                        1: 'Yes',
                        0: 'No'
                    },
                    operators: ['equal']
                }, {
                    id: 'price',
                    label: 'Price',
                    type: 'double',
                    validation: {
                        min: 0,
                        step: 0.01
                    }
                }, {
                    id: 'id',
                    label: 'Identifier',
                    type: 'string',
                    placeholder: '____-____-____',
                    operators: ['equal', 'not_equal'],
                    validation: {
                        format: /^.{4}-.{4}-.{4}$/
                    }
                },
                {
                    id: 'date',
                    label: 'Datepicker',
                    type: 'date',
                    validation: {
                        format: 'YYYY/MM/DD'
                    },
                    plugin: 'datepicker',
                    plugin_config: {
                        format: 'yyyy/mm/dd',
                        todayBtn: 'linked',
                        todayHighlight: true,
                        autoclose: true
                    }
                }
            ],
            rules: rules_basic
        });

        var dataArr = []
        var tableArr = []


        $('#btn-get').on('click', function () {
            var result = $('#builder').queryBuilder('getRules');
            if (!$.isEmptyObject(result)) {
                alert(JSON.stringify(result, null, 2));
            } else {
                console.log("invalid object :");
            }
            console.log(result);
        });

        $('#btn-reset').on('click', function () {
            $('#builder').queryBuilder('reset');
        });

        $('#btn-set').on('click', function () {
            //$('#builder').queryBuilder('setRules', rules_basic);
            var result = $('#builder').queryBuilder('getRules');
            if (result.sql.length) {
                alert(result.sql + '\n\n' + JSON.stringify(result.params, null, 2));
            }
        });


        // set basic sql query 
        $('#btn-set-sql').on('click', function () {
            $('#builder').queryBuilder('setRulesFromSQL', sql_import_export);
        });

        var orderbyStr = "";

function CreateColumnQuery(){
            const tableVal = $('#table').val();
            const columnVal = $('#column').val();
      
           
            dataArr.splice(0, dataArr.length)
            orderbyStr = "";
            $('#listData').find('li').each(function () {
                    const tableName = $(this).attr('data-value').split('.')[0];
                    const columnName = $(this).attr('data-value');
                    const orderBy = $(this).attr('data-orderby');

                   
                    if(orderBy != undefined && orderBy != ""){
                        orderbyStr = columnName + " " + orderBy
                    }

                   
                    if(tableArr.indexOf(tableName) == -1) {
                        tableArr.push(tableName)
                    }
                    
                    if(dataArr.indexOf(columnName) == -1) {
                        dataArr.push(columnName)
                    }
                })
           
          
}
        $('#btn-get-sql').on('click', function (e) {
            $('.query_body').val("")
            var result = $('#builder').queryBuilder('getSQL', 'question_mark');
            if($('#listData').find('li').length !== 0){
                CreateColumnQuery();
                if (result.sql.length) {
                    $('#query_title').html(e.target.textContent);
                    let joinArr = dataArr.join()
                    let joinTableArr = tableArr.join()
                    var valArray = result.params;

                    var str = result.sql;
                    var strCount = str.length;
                    var count = 0;
                    for (var x = 0; x < strCount; x++) {
                        let ques = str[x]
                        if (ques == "?") {
                            console.log(valArray[count], typeof valArray[count]);
                            if(typeof valArray[count] == "string"){
                                str = str.replace("?", "'"+valArray[count]+"'");
                            }else{
                                str = str.replace("?", valArray[count]);
                            }
                            strCount = str.length;
                            count++
                        }
                    }
					
					var topcnt = "";
					if(document.getElementById("rows").value != "")
						topcnt = " TOP " + document.getElementById("rows").value + " ";
					
					var wherecon = "";
					if(joinTableArr.includes("sender") && joinTableArr.includes("receiver"))
						wherecon = "  sender.groupId = receiver.groupId  AND  sender.userId = receiver.userId AND ";

					if(joinTableArr.includes("sender") && joinTableArr.includes("transactions"))
						wherecon = wherecon + "  sender.groupId = transactions.sendGroupId  AND  sender.userId = transactions.sendUserId AND ";

					if(joinTableArr.includes("receiver") && joinTableArr.includes("transactions"))
						wherecon = wherecon + "  receiver.groupId = transactions.recvGroupId AND receiver.userId = transactions.recvUserId AND receiver.nickName = transactions.recvNickName AND ";

                    if(orderbyStr == ""){
                        $('.query_body').val("SELECT " + topcnt + joinArr + " \nFROM " + joinTableArr + " \nWHERE " + wherecon + str + "\n"  + JSON.stringify(result.params) )
						document.getElementById('query').value = $('.query_body').val()
						form.onsubmit = submit;			
                    }else{
                        $('.query_body').val("SELECT " + topcnt + joinArr + " \nFROM " + joinTableArr + " \nWHERE " + wherecon + str  + " \nORDER BY " + orderbyStr + "\n"  + JSON.stringify(result.params))
						document.getElementById('query').value = $('.query_body').val()
                    }
                }
            }else{
                alert("Please Select Column and Table")
            }
          
        });

        $('#builder').on('getRules.queryBuilder.filter', function (e) {
            //$log.info(e.value);
        });

        $("ul.list").sortable();
        $("ul.list").disableSelection();

        const pushData = (e) => {
            const value = e.value;
            const title = e.options[e.selectedIndex].text;
            $('#listData').append('<li data-value="' + value + '" ><i class="drag-icon glyphicon glyphicon-move"></i> ' + title + ' <a class="btn-danger" onclick="deleteLi(this)"><i class="glyphicon glyphicon-remove"></i></a></li>')
            
            triggerClickEvents();
        }


        function triggerClickEvents(){
            

            $('#listData li').each(function(){
            $(this).off().on('click',function(){
                $(this).siblings('li').find('.orderby').remove();
                $(this).siblings('li').attr('data-orderby','');
                $(this).siblings('.active').removeClass();
                $(this).addClass('active');
                const attrVal = $(this).attr('data-orderby')
                console.log(attrVal)
                
                switch(attrVal){
                    case 'asc':
                        $(this).attr('data-orderby','desc');
                        $(this).find('.orderby').remove();
                        $(this).append('<i class="orderby glyphicon glyphicon-chevron-down"></i>');
                        break;
                    case 'desc':
                        $(this).attr('data-orderby','');
                        $(this).find('.orderby').remove();
                        $(this).removeClass();
                        $(this).append('<i class="orderby"></i>');
                        break;
                    case undefined:
                        $(this).attr('data-orderby','asc');
                        $(this).find('.orderby').remove();
                        $(this).append('<i class="orderby glyphicon glyphicon-chevron-up"></i>');
                        break;
                    case "":
                        $(this).attr('data-orderby','asc');
                        $(this).find('.orderby').remove();
                        $(this).append('<i class="orderby glyphicon glyphicon-chevron-up"></i>');
                        break;
                    default:
                        $(this).attr('data-orderby','asc');
                        $(this).find('.orderby').remove();
                        $(this).append('<i class="orderby glyphicon glyphicon-chevron-up"></i>');
                        break;

                }
                // const className = $(this).find('.orderby')
            // const name = $(this).addClass('glyphicon glyphicon-arrow-up');
            // const 
            // switch
            })
        })
        }
        

        function deleteLi(e) {
            $(e).parent('li').remove()
        }
