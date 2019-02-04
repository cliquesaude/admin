/*!
 * Copyright 2018 E-Com Club
 */

(function () {
  'use strict'

  // current tab ID
  var tabId = window.tabId
  var Tab = window.Tabs[tabId]
  // edit JSON document
  // var commit = Tab.commit
  var Data = function () {
    // current data from global variable
    return Tab.data
  }

  // setup basic order data
  var data = Data()
  var $orderBase = $('#t' + tabId + '-order-base')

  // handle amount extra fields collapse
  var $amountExtra = $orderBase.find('#t' + tabId + '-extra-amount')
  var toggleAmountExtra = function () {
    $amountExtra.children('div').slideToggle()
  }
  $amountExtra.children('a').click(toggleAmountExtra)
  if (data.amount) {
    if (data.amount.tax || data.amount.extra) {
      toggleAmountExtra()
    }
  }
}())
