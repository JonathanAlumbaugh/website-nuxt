<template>
<div>
  <modal name="foo" :width="300" :height="140">
    <div class="modal-content">
      <div class="modal-body">
        <div class="row">
          <div class="centered col-md-11">
            <p>email me at
              <a href="mailto:jonathan.alumbaugh@gmail.com?Subject=hi!" target="_top">
                <span class="photojournalist">jonathan.alumbaugh@gmail.com</span>
              </a> or call me at 860 457 8556!</p>
            <!--
                         <form action="php/contact.php" method="POST">
                             <h2>your name</h2>
                             <input class="input-shadow" type="text" name="name">
                             <h2>your e-mail</h2>
                             <input class="input-shadow" type="text" name="email">
                             <h2>your message</h2>
                             <textarea class="input-shadow" name="message"></textarea>
                         </form>
                         -->
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn" value="Send" data-dismiss="modal">
          <p class="input-button">thanks!</p>
        </button>
        <button type="button" class="btn" data-dismiss="modal">
          <p class="input-button">never mind</p>
        </button>
      </div>
    </div>
  </modal>
  <p>Hi from <b>{{ name }}</b>.</p>
  <button @click="$modal.show('foo')">
      Open modal
    </button>
</div>
</template>

<script>
export default {
  name: 'mainContactModal',
  asyncData( {
    req
  } ) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>
