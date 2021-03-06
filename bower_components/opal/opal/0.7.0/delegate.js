/* Generated by Opal 0.7.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$__setobj__', '$__getobj__', '$respond_to?', '$__send__', '$to_proc']);
  (function($base, $super) {
    function $Delegator(){};
    var self = $Delegator = $klass($base, $super, 'Delegator', $Delegator);

    var def = self.$$proto, $scope = self.$$scope, TMP_1;

    def.$initialize = function(obj) {
      var self = this;

      return self.$__setobj__(obj);
    };

    return (def.$method_missing = TMP_1 = function(m, args) {
      var $a, $b, self = this, $iter = TMP_1.$$p, block = $iter || nil, target = nil;

      args = $slice.call(arguments, 1);
      TMP_1.$$p = null;
      target = self.$__getobj__();
      if ((($a = target['$respond_to?'](m)) !== nil && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = target).$__send__, $a.$$p = block.$to_proc(), $a).apply($b, [m].concat(args))
        } else {
        return Opal.find_super_dispatcher(self, 'method_missing', TMP_1, null).apply(self, [m].concat(args).concat(block.$to_proc()))
      };
    }, nil) && 'method_missing';
  })(self, $scope.get('BasicObject'));
  (function($base, $super) {
    function $SimpleDelegator(){};
    var self = $SimpleDelegator = $klass($base, $super, 'SimpleDelegator', $SimpleDelegator);

    var def = self.$$proto, $scope = self.$$scope;

    def.delegate_sd_obj = nil;
    def.$__getobj__ = function() {
      var self = this;

      return self.delegate_sd_obj;
    };

    return (def.$__setobj__ = function(obj) {
      var self = this;

      return self.delegate_sd_obj = obj;
    }, nil) && '__setobj__';
  })(self, $scope.get('Delegator'));
  return (Opal.Object.$$proto.$DelegateClass = function(superklass) {
    var self = this;

    return $scope.get('SimpleDelegator');
  }, nil) && 'DelegateClass';
})(Opal);

//# sourceMappingURL=delegate.map
;
