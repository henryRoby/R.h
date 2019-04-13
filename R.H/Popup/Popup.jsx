<div className="App">
        <button onClick={this.openPopup}>
          Click Me!
        </button>

        <Popup show={this.state.isOpen}
          onClose={this.closePopup}>
          <SubscriptionForm></SubscriptionForm>
        </Popup>
      </div>