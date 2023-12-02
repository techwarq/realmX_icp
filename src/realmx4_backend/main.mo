import Text "mo:base/Text";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import token "./token";

actor {

  type ResponseData = {
    status : Bool;
    data : Text;
  };

  type ResponseDataAllFiles = {
    status : Bool;
    data : [(Text, Text)];
  };

  type ResponseDataAllQuestions = {
    status : Bool;
    data : [(Text, Text)];
  };
   type ResponseDataDeleteQuestion = {
    status : Bool;
    data : Text;
   };
  var fileHashMap = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);
  stable var fileEntries : [(Text, Text)] = [];

  var questionHashMap = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);
  stable var questionEntries : [(Text, Text)] = [];

  public func saveFile(uuid : Text, file : Text) : async ResponseData {
    fileHashMap.put(uuid, file);
    return {
      status = true;
      data = file;
    };
  };

  public query func getFile(uuid : Text) : async ResponseData {
    var file : Text = switch (fileHashMap.get(uuid)) {
      case (null) { throw Error.reject("File not exist") };
      case (?result) { result };
    };
    return {
      status = true;
      data = file;
    };
  };

  public query func getAllFiles() : async ResponseDataAllFiles {
    let files = Iter.toArray<(Text, Text)>(fileHashMap.entries());
    return {
      status = true;
      data = files;
    };
  };

  public func addQuestion(id : Text, problemStatement : Text) : async ResponseData {
    questionHashMap.put(id, problemStatement);
    return {
      status = true;
      data = "Question added successfully.";
    };
  };

  public func deleteQuestion(id : Text) : async ResponseDataDeleteQuestion {
  let maybeValue : ?Text = questionHashMap.remove(id);
  switch (maybeValue) {
    case (null) {
      return {
        status = false;
        data = "Question not found.";
      };
    };
    case (?_) {
      return {
        status = true;
        data = "Question deleted successfully.";
      };
  };
};
  };

  

  public query func getQuestion(id : Text) : async ResponseData {
    var problemStatement : Text = switch (questionHashMap.get(id)) {
      case (null) { throw Error.reject("Question not found.") };
      case (?result) { result };
    };
    return {
      status = true;
      data = problemStatement;
    };
  };

  public query func getAllQuestions() : async ResponseDataAllQuestions {
    let questions = Iter.toArray<(Text, Text)>(questionHashMap.entries());
    return {
      status = true;
      data = questions;
    };
  };

  public func saveFile1(uuid : Text, file : Text) : async ResponseData {
    fileHashMap.put(uuid, file);
    return {
      status = true;
      data = file;
    };
  };
  public func tokeninit(
    _logo : Text,
    _name : Text,
    _symbol : Text,
    _decimals : Nat8,
    _totalSupply : Nat,
    _owner : Principal,
    _fee : Nat,
  ) : async Principal {
   let Tokeninfo = await token.Token(
      _logo,_name,_symbol,_decimals,_totalSupply,_owner,_fee,
    );
    await Tokeninfo.getCanisterId()
  };

  system func preupgrade() {
    fileEntries := Iter.toArray(fileHashMap.entries());
    questionEntries := Iter.toArray(questionHashMap.entries());
  };

  system func postupgrade() {
    fileHashMap := HashMap.fromIter<Text, Text>(fileEntries.vals(), 1, Text.equal, Text.hash);
    fileEntries := [];
    questionHashMap := HashMap.fromIter<Text, Text>(questionEntries.vals(), 1, Text.equal, Text.hash);
    questionEntries := [];
  };
};
