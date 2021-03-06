/* Generated by Opal 0.7.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$raise', '$class', '$__init__', '$instance_eval', '$new', '$extend']);
  return (function($base) {
    var self = $module($base, 'Singleton');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.defn(self, '$clone', function() {
      var self = this;

      return self.$raise($scope.get('TypeError'), "can't clone instance of singleton " + (self.$class()));
    });

    Opal.defn(self, '$dup', function() {
      var self = this;

      return self.$raise($scope.get('TypeError'), "can't dup instance of singleton " + (self.$class()));
    });

    (function($base) {
      var self = $module($base, 'SingletonClassMethods');

      var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

      Opal.defn(self, '$clone', TMP_1 = function() {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_1.$$p, $yield = $iter || nil;

        TMP_1.$$p = null;
        return $scope.get('Singleton').$__init__(Opal.find_super_dispatcher(self, 'clone', TMP_1, $iter).apply(self, $zuper));
      });

      Opal.defn(self, '$inherited', TMP_2 = function(sub_klass) {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_2.$$p, $yield = $iter || nil;

        TMP_2.$$p = null;
        Opal.find_super_dispatcher(self, 'inherited', TMP_2, $iter).apply(self, $zuper);
        return $scope.get('Singleton').$__init__(sub_klass);
      });
    })(self);

    (function(self) {
      var $scope = self.$$scope, def = self.$$proto;

      self.$$proto.$__init__ = function(klass) {
        var $a, $b, TMP_3, self = this;

        ($a = ($b = klass).$instance_eval, $a.$$p = (TMP_3 = function(){var self = TMP_3.$$s || this;

        return self.singleton__instance__ = nil}, TMP_3.$$s = self, TMP_3), $a).call($b);
        Opal.defs(klass, '$instance', function() {
          var $a, self = this;
          if (self.singleton__instance__ == null) self.singleton__instance__ = nil;

          if ((($a = self.singleton__instance__) !== nil && (!$a.$$is_boolean || $a == true))) {
            return self.singleton__instance__};
          return self.singleton__instance__ = self.$new();
        });
        return klass;
      };
      return (self.$$proto.$included = TMP_4 = function(klass) {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_4.$$p, $yield = $iter || nil;

        TMP_4.$$p = null;
        Opal.find_super_dispatcher(self, 'included', TMP_4, $iter).apply(self, $zuper);
        klass.$extend($scope.get('SingletonClassMethods'));
        return $scope.get('Singleton').$__init__(klass);
      }, nil) && 'included';
    })($scope.get('Singleton').$singleton_class());
  })(self)
})(Opal);

//# sourceMappingURL=singleton.map
;
